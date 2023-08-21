import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  socket = io("http://localhost:8080");
  
  socket.on("connect",()=>{
    console.log("Successfully connected to socket server")
    console.log(socket.id);
  })
};
