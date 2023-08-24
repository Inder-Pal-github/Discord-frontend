import { Box, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsAction";

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation,
  rejectFriendInvitation,
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const handleAcceptInviation = () => {
    console.log("clicked accept handler");
    acceptFriendInvitation({ id });
    // setButtonsDisabled(true);
  };
  const handleRejectInviation = () => {
    console.log("clicked reject handler");
    rejectFriendInvitation({ id });
    // setButtonsDisabled(true);
  };
  useEffect(() => {
    // Reset buttonsDisabled when receiving new props
    setButtonsDisabled(false);
  }, [id]);
  return (
    <Tooltip title={mail}>
      <div
        style={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitationHandler={handleAcceptInviation}
            rejectInvitationHandler={handleRejectInviation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(PendingInvitationsListItem);
