import React, { useEffect } from "react";
import { styled } from "@mui/material";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../realtimeCommnication/socketConnection";

const Wrapper = styled("div")({
  flexGrow: 1,
  display:"flex",
  flexDirection:"column",
  alignItems:"start",
  justifyContent:"space-between"
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    // Todo
    // fetching chat history from specific user id
    console.log(chosenChatDetails);
    getDirectChatHistory({
      receiverUserId:chosenChatDetails.id
    })
  }, [chosenChatDetails]);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
