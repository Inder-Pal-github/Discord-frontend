import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ScreenShare, StopScreenShare } from "@mui/icons-material";

const ScreenShareButton = () => {
  const [isScreenShared, setIsScreenShared] = useState(false);
  const handleScreenShare = () => {
    setIsScreenShared(!isScreenShared);
  };
  return (
    <IconButton onClick={handleScreenShare} style={{ color: "white" }}>
      {isScreenShared ? <ScreenShare /> : <StopScreenShare />}
    </IconButton>
  );
};

export default ScreenShareButton;
