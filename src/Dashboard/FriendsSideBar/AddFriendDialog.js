import React, { useEffect, useState } from "react";
import { validateMail } from "../../shared/utils/validators";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import InputWithLabel from "../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    // logic to sent friend request to server.
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContent>
            <Typography>
              Enter e-mail address of friend which you whould like to invite
            </Typography>
            <InputWithLabel
              type="text"
              label="Mail"
              value={mail}
              setValue={setMail}
              placeholder="Enter mail address"
            />
          </DialogContent>
          <DialogActions>
            <CustomPrimaryButton
              onClick={handleSendInvitation}
              disabled={!isFormValid}
              label="Send"
              additionStyles={{
                marginLeft: "15px",
                marginRight: "15px",
                marginBottom: "10px",
              }}
            />
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
