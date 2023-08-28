import React from 'react'
import { Button } from '@mui/material'
import {Add} from "@mui/icons-material"
import * as roomHandler from "../../realtimeCommnication/roomHandler"
const CreateRoomButton = () => {
    const createNewRoomHandler = ()=>{
        // create room and send info to server
        roomHandler.createNewRoom();
    }
  return (
    <Button
    onClick={createNewRoomHandler}
    style={{
        width:"48px",
        height:"48px",
        borderRadius:"16px",
        margin:"0",
        padding:"0",
        minWidth:"0",
        marginTop:"10px",
        color:"white",
        backgroundColor:"#5865F2"
    }}
    >
        <Add />
    </Button>
  )
}

export default CreateRoomButton