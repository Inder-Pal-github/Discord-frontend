import io from "socket.io-client";
import { setPendingFriendsInvitation,setFriends,setOnlineUsers } from "../store/actions/friendsAction";
import { store } from "../store/store";

let socket = null;

export const connectWithSocketServer = ({ userDetails }) => {
  const { token } = userDetails;
  socket = io("http://localhost:8080", {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.log("Successfully connected to socket server");
    console.log(socket.id);
  });
  socket.on("friends-invitations", (data) => {
    const { pendingInvitaions } = data;
    store.dispatch(setPendingFriendsInvitation(pendingInvitaions));
  });

  socket.on("friends-list",(data)=>{
    const {friends} = data;
    console.log(friends);
    store.dispatch(setFriends(friends));
  })

  socket.on("online-users",(data)=>{
    const {onlineUsers} = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  })
};
