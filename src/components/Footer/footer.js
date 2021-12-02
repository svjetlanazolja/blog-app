import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBox1}>
        <h2>Do you want to get our latest updates?</h2>
        <p>
          Please subscribe our newsletter for upcoming new videos and latest
          information about our work. Thank you.
        </p>
      </div>

      <div className={styles.footerBox2}>
        <h2>Quick Links</h2>
        <div className={styles.box2Links}>
          <a href="#">Duis bibendum</a>
          <a href="#">Purus non dignissim</a>
          <a href="#">Sapien metus gravida</a>
          <a href="#">Eget consequat</a>
          <a href="#">Praesent eu pulvinar</a>
        </div>
      </div>

      <div className={styles.footerBox3}>
        <h2>Our Pages</h2>
        <div className={styles.box3Links}>
          <a href="#">Our Videos</a>
          <a href="#">License Terms</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policies</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
