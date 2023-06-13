'use client'
import React from "react";
import about from './about.module.scss'

export default function About() {

  return (
    <div className={about.page}>
      <div className={about.about}>
        <h1 className={about.header}>ABOUT</h1>
        <div className={about.paragraph}>
          <p className={about.text}>
          I have been passionately working as a web developer for nearly three years, and my love for this field only continues to grow. The aspect of design particularly captivates me, as I strive to create extraordinary websites that are at the forefront of innovation. <br /><br />
          My primary objective is to craft websites that not only possess stunning aesthetics but also excel in performance and accessibility. By staying up-to-date with the latest technologies and industry trends, I ensure that the websites I develop are both cutting-edge and user-friendly. <br /><br />
          Ultimately, my aspiration is to produce work that fills me with pride and garners recognition. I am driven by the desire to contribute to the digital landscape by creating remarkable online experiences that leave a lasting impression.<br /><br />
          I look forward to showcasing my skills, expertise, and dedication through my personal portfolio.
          </p >
          </div>
      </div>
       </div>
  );
}
