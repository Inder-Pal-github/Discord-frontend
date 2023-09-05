import io from "socket.io-client";
import {
  setPendingFriendsInvitation,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsAction";
import { store } from "../store/store";
import { updateDirectChatHistoryIfActive } from "../shared/utils/chat";
import { newRoomCreated, updateActiveRooms } from "./roomHandler";

let socket = null;

export const connectWithSocketServer = ({ userDetails }) => {
  const { token } = userDetails;
  socket = io("http://localhost:8080", {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.log("Successfully connected to socket server: ", socket.id);
  });
  socket.on("friends-invitations", (data) => {
    const { pendingInvitaions } = data;
    store.dispatch(setPendingFriendsInvitation(pendingInvitaions));
  });

  socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on("room-create", (data) => {
    newRoomCreated(data);
  });

  socket.on("active-rooms", (data) => {
    updateActiveRooms(data);
  });

  socket.on("conn-prepare", (data) => {
    console.log("prepare for connection");
    console.log(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit("room-create");
};

export const joinRoom = (data) => {
  socket.emit("room-join", data);
};

export const leaveRoom = (data) => {
  socket.emit("room-leave", data);
};
