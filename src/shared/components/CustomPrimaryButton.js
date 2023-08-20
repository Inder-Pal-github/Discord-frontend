import React from "react";
import { Button } from "@mui/material";

const CustomPrimaryButton = ({ label, additionStyles, disabled, onClick }) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      style={additionStyles?additionStyles:{}}
      variant="contained"
      sx={{
        bgColor: "#5865F2",
        color:"white",
        testTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
