import React from "react";
import { Typography, styled } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});
const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled("div")({
  color: "#DCDDDE",
});

const SameAuthorMessageText = styled("div")({
  marginLeft: "70px",
});

const SameAuthorMessageContent = styled("div")({
  color: "#DCDDDE",
  width: "97%",
});

const message = ({ content, username, date, sameDay, sameAuthor }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: "16px", color: "white" }}>
          {username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
        </Typography>
        <MessageContainer>{content}</MessageContainer>
      </MessageContainer>
    </MainContainer>
  );
};

export default message;
