import React from "react";
import styles from "./button.module.css";
import Button from "@mui/material/Button";

const ButtonCom = () => {
  return (
    <Button
      className={styles.buttonBlog}
      variant="contained"
      style={{ backgroundColor: "#000000ad", padding: "20px 40px" }}
    >
      Hello World
    </Button>
  );
};

export default ButtonCom;
