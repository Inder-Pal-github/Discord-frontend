import React from "react";
import { Typography, styled } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";

const MainContainer = styled("div")({
  width: "98%",
  display: "column",
  marginTop: "10px",
});

const MessagesHeader = ({ name = "" }) => {
    console.log(name);
  return (
    <MainContainer>
      <Avatar username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography sx={{
        color:"#b9bbbe",
        marginLeft:"5px",
        marginRight:"5px"
      }}>
        This is the starting of this conversation.
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
