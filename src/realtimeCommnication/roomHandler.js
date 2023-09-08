import {
  setActiveRooms,
  setLocalStream,
  setOpenRoom,
  setRemoteStreams,
  setRoomDetails,
} from "../store/actions/roomActions";
import { store } from "../store/store";
import * as socketConnection from "./socketConnection";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = () => {
  const successCallbackFunc = () => {
    // only dispatch or open room if successfully executed to webRTC also.
    store.dispatch(setOpenRoom(true, true));
    socketConnection.createNewRoom();
  };
  const audioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  const friends = store.getState().friends.friends;
  const rooms = [];
  activeRooms.forEach((room) => {
    friends.forEach((f) => {
      if (f.id === room.roomCreator.userId) {
        rooms.push({ ...room, creatorUserName: f.username });
      }
    });
  });
  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallbackFunc = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    socketConnection.joinRoom({ roomId });
  };
  webRTCHandler.getLocalStreamPreview(false, successCallbackFunc);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;
  // remove camera access when exiting the room.
  const localStream = store.getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));

  }
  store.dispatch(setRemoteStreams([]));
  webRTCHandler.closeAllConnections();
  socketConnection.leaveRoom({ roomId });

  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
