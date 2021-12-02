import React from "react";
import styles from "./main.module.css";
import Card from "../Card/card";
import image1 from "../../images/blog-post1.jpg";
// import image2 from "../../images/blog-post2.jpg";

const Main = () => {
  const post = [
    {
      imgSrc: image1,
      title: "Aenean aliquet sapien",
      text: "Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.",
    },
    {
      imgSrc: image1,
      title: "Mauris in odio vel odio",
      text: "You may need TemplateMo for a quick chat or send an email if you have any question about this CSS template. font-family: 'Source Sans Pro', sans-serif; for this template.",
    },
    {
      imgSrc: image1,
      title: "Sagittis sodales enim",
      text: "You are allowed to use this video catalog for your business websites. Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam, sed faucibus lorem sed",
    },
    {
      imgSrc: image1,
      title: "Nam tincidunt consectetur",
      text: "You can apply this template for your commercial CMS theme. Nam sem leo, imperdiet non lacinia eget, volutpat ac massa. Donec mattis in velit quis commodo. Cras nec rutrum arcu.",
    },
  ];

  return (
    <div className={styles.main}>
      <h2>Our Video Catalog</h2>
      <div className={styles.catalogBlog}>
        <h3>Categories:</h3>
        {/* <ul>
          <li>
            <a className={} href="#">All</a>
          </li>
        </ul> */}
      </div>

      <div className={styles.cardContainer}>
        {post.map((blog) => {
          return (
            <Card imgSrc={blog.imgSrc} title={blog.title} text={blog.text} />
          );
        })}
        {/* <Card imgSrc={image1} title="Test" text="test test" /> */}
      </div>
    </div>
  );
};

export default Main;
