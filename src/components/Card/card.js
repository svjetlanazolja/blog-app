import React from "react";
import styles from "./card.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1 from "../../images/blog-post1.jpg";

const CardComponent = ({ imgSrc, title, text }) => {
  return (
    <Card style={{ width: "30%", margin: "0 0 5% 0", border: "none" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body className={styles.bodyCard}>
        <Card.Title className={styles.titleBlog}>
          <h3>{title}</h3>
        </Card.Title>
        <Card.Text className={styles.textBlog}>
          <p>{text}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
