import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInputs = (props) => {
    const {mail,setMail,password,setPassword} = props;
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter your email address..."
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password..."
      />
    </>
  );
};

export default LoginPageInputs;
