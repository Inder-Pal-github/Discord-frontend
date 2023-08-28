import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { MicOff, Mic } from "@mui/icons-material";

const MicButton = () => {
  const [micEnabled, setMicEnabled] = useState(false);
  const handleMicToggle = () => {
    setMicEnabled(!micEnabled);
  };
  return (
    <IconButton onClick={handleMicToggle} style={{ color: "white" }}>
      {micEnabled ? <Mic /> : <MicOff />}
    </IconButton>
  );
};

export default MicButton;
