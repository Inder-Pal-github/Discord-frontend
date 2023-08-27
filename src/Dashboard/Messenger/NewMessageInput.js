import React, { useState } from "react";
import { styled } from "@mui/material";
import { connect } from "react-redux";
import { sendDirectMessage } from "../../realtimeCommnication/socketConnection";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Input = styled("input")({
  backgroundColor: "#2f3136",
  color: "white",
  width: "90%",
  height: "44px",
  borderRadius: "10px",
  fontSize: "14px",
  padding: "0 10px",
});
const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState("");

  const handleMessageValueChange = (e) => {
    setMessage(e.target.value);
  };
  const handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      handleSentMessage();
  }
  };
  const handleSentMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
    }
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return { ...chat };
};

export default connect(mapStoreStateToProps)(NewMessageInput);
