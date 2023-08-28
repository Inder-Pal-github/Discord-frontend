import io from "socket.io-client";
import {
  setPendingFriendsInvitation,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsAction";
import { store } from "../store/store";
import {updateDirectChatHistoryIfActive} from "../shared/utils/chat"
import { newRoomCreated } from "./roomHandler";

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
    console.log("directchathistory",data)
    updateDirectChatHistoryIfActive(data);
  });

  socket.on("room-create",(data)=>{
    newRoomCreated(data);
  })
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  console.log(data);
  socket.emit("direct-chat-history", data);
};


export const createNewRoom = ()=>{
  socket.emit("room-create");
}