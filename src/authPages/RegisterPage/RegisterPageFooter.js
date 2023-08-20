import React from 'react'

import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const getFormNotValidMessage = () => {
    return "Enter correct e-mail and password should contain b/w 6 to 12 characters, username should contain 3 to 12 characters.";
  };
  const getFormValidMessage = () => {
    return "Prese to register!";
  };
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate("/login");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >

        <div>
          <CustomPrimaryButton
            label="Register"
            additionStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
            ></CustomPrimaryButton>
        </div>
        <RedirectInfo
          text="Already have an account? "
          redirectText="Login account"
          additionalStyle={{ marginTop: "5px" }}
          redirectHandler={handlePushToLoginPage}
          />
          </Tooltip>
    </>
  );
};




export default RegisterPageFooter