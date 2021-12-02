import React from "react";
import styles from "./hero.module.css";
import Navbar from "../Navbar/navbar";
import Button from "../Button/ButtonCom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <Button />
    </div>
  );
};

export default Hero;
