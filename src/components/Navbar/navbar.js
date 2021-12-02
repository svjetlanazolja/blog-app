import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="#" className={styles.nav}>
        VIDEOS
      </a>
      <a href="#" className={styles.nav}>
        ABOUT
      </a>
      <a href="#" className={styles.nav}>
        CONTACT
      </a>
    </div>
  );
};

export default Navbar;
