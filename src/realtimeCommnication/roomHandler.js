import { setActiveRooms, setOpenRoom,setRoomDetails } from "../store/actions/roomActions";
import { store } from "../store/store";
import * as socketConnection  from "./socketConnection"



export const createNewRoom = () => {
    store.dispatch(setOpenRoom(true,true));
    socketConnection.createNewRoom();
};


export const newRoomCreated = (data)=>{
    const {roomDetails} = data;
    store.dispatch(setRoomDetails(roomDetails));
}

export const updateActiveRooms = (data)=>{
    const {activeRooms} = data;
    
    const friends = store.getState().friends.friends;
    const rooms = [];
    activeRooms.forEach(room=>{
        friends.forEach((f=>{
            if(f.id===room.roomCreator.userId){
                rooms.push({...room,creatorUserName:f.username});
            }
        }))
    })
    console.log(rooms);
    store.dispatch(setActiveRooms(rooms));
}