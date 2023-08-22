import io from "socket.io-client";
import { setPendingFriendsInvitation } from "../store/actions/friendsAction";
import {store} from "../store/store"

let socket = null;

export const connectWithSocketServer = ({userDetails}) => {
  console.log(userDetails);
    const {token} = userDetails
  socket = io("http://localhost:8080",{
    auth:{
        token
    }
  });
  
  socket.on("connect",()=>{
    console.log("Successfully connected to socket server")
    console.log(socket.id);
  })
  socket.on("friends-invitations",(data)=>{
    const {pendingInvitaions} = data;
    console.log(pendingInvitaions)
    store.dispatch(setPendingFriendsInvitation(pendingInvitaions));
  })
};
