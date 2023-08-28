import React from "react";
import { styled } from "@mui/material";
import MessagesHeader from "./MessagesHeader";
import { connect } from "react-redux";
// import DUMMY_MESSAGES from "./DUMMY_MESSAGES";
import DateSeparator from "./DateSeparator"
import Message from "./message";

const MainContainer = styled("div")({
  height: "calc(100%-60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Messages = ({ chosenChatDetails, messages }) => {
  console.log(messages);
  const convertDateToHumanReadable = (date, format) => {
    const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear(),
    };
    return format.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched]);
  };
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages?.map((message, index) => {
        console.log(messages);
        const sameAuthor =
          index > 0 && messages[index].author === messages[index - 1].author;
        const sameDay =
          index > 0 &&
          convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") ===
            convertDateToHumanReadable(
              new Date(messages[index - 1].date),
              "dd/mm/yy"
            );

        return (
          <div key={message._id} style={{width:"97%"}} >
            {
              (!sameDay || index===0) && (
                <DateSeparator date={convertDateToHumanReadable(new Date(message.date),"dd/mm/yy")} />
              )
            }
            <Message
              key={index}
              content={message?.content}
              username={chosenChatDetails?.name}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(
                new Date(message.date),
                "dd/mm/yy"
              )}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(Messages);
