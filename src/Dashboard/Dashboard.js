import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Sidebar from "./Sidebar/Sidebar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messanger from "./Messenger/Messanger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { connectWithSocketServer } from "../realtimeCommnication/socketConnection";


const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});
const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      console.log(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [setUserDetails]);
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSideBar />
      <Messanger />
      <AppBar />
    </Wrapper>
  );
};
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(Dashboard);
