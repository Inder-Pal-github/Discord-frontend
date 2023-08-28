import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import {VideocamOff,Videocam} from "@mui/icons-material"

const CameraButton = () => {
    const [cameraEnabled,setCameraEnabled] = useState(false);
    const handleToggleCamera = ()=>{
        setCameraEnabled(!cameraEnabled);
    }
  return (
    <IconButton onClick={handleToggleCamera} style={{
        color:"white"
    }} >
        {cameraEnabled ?< Videocam /> :  <VideocamOff />}
    </IconButton>
  )
}

export default CameraButton