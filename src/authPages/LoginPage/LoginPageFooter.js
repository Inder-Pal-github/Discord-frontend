import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const getFormNotValidMessage = () => {
    return "Enter correct e-mail and password should contain b/w 6 to 12 characters.";
  };
  const getFormValidMessage = () => {
    return "Prese to log in!";
  };
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >

        <div>
          <CustomPrimaryButton
            label="Log in"
            additionStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
            ></CustomPrimaryButton>
        </div>
        <RedirectInfo
          text="Need an account? "
          redirectText="Create a account"
          additionalStyle={{ marginTop: "5px" }}
          redirectHandler={handlePushToRegisterPage}
          />
          </Tooltip>
    </>
  );
};

export default LoginPageFooter;
