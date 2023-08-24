import React from "react";
import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = ({ friends = [], onlineUsers = [] }) => {
  const checkOnlineUsers = (friends, onlineUsers) => {
    friends.forEach((f) => {
      const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
      f.isOnline = isUserOnline ? true : false;
    });
    return friends;
  };
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers)?.map((f) => {
        return (
          <FriendsListItem
            username={f.username}
            id={f.id}
            key={f.id}
            isOnline={f.isOnline}
          />
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};
export default connect(mapStoreStateToProps)(FriendsList);
