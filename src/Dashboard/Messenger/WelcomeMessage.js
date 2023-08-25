import React from "react";
import { Typography, styled } from "@mui/material";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography>
        To start chatting - <br />
        choose a friend for conversation
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
