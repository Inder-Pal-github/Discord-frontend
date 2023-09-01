import React from "react";
import { styled } from "@mui/material";
import { connect } from "react-redux";
import Video from "./Video";

const MainContainer = styled("div")({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideosContainer = ({ localStream }) => {
  return (
    <MainContainer>
      <Video stream={localStream} isLocalStream />
    </MainContainer>
  );
};

const mapStoreStatesToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStatesToProps)(VideosContainer);
