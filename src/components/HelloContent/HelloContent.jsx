import React from "react";
import styles from "./HelloContent.module.scss";

const HelloContent = () => (
  <div className={styles.root}>
    <div>
      <span className={styles.intro}>
        <u>Hi, I'm Dragoș</u>
      </span>
      <span role="img" aria-label="wave">
        &nbsp;👋
      </span>
    </div>
    <div className={styles.subIntro}>
      <p>
        I am currently a <span className={styles.highlightedSpan}>Front-End Tech-Lead</span> at Aera Technology, where I
        have an active role in all feature and design decisions, defining and developing front-end architectures applied
        in a large and distributed development team. The tech stack consists of{" "}
        <span className={styles.highlightedSpan}>micro-frontends with ReactJS & Redux.</span>
      </p>
      <p>
        I am also actively spending time on building and understanding{" "}
        <span className={styles.highlightedSpan}>Deep Learning</span> models. Some of the models I have built include:
      </p>
      <ul className={styles.deepLearning}>
        <li>Neural network to predict bike-sharing data.</li>
        <li>CNN to classify dog breeds given an image.</li>
        <li>RNN to generate tv scripts.</li>
        <li>RNN for sentiment prediction given a text.</li>
        <li>GAN to generate faces.</li>
      </ul>
      <p>
        Previously I worked at Deloitte, where I undertook a digital transformation project for Prudential, one of UK's
        largest financial institutions. The tech stack included a similar architecture -{" "}
        <span className={styles.highlightedSpan}>micro-frontends with ReactJS, Redux and Typescript</span>. I was also
        actively involved in the recruitment process of front-end developers within Deloitte.
      </p>
      <p>
        I started my career into web development at Questia in 2015, right after my first year of college. There, I've
        worked as a full-stack developer with <span className={styles.highlightedSpan}>AngularJS, BackboneJS</span> on
        the front-end, <span className={styles.highlightedSpan}>Java and PHP Symfony2</span> on the back-end. Shortly
        after, I developed a hybrid iOS/Android app using Ionic and Cordova.
      </p>
    </div>
    <div className={styles.links}>
      <div className={styles.providers}>
        <div>Email:</div>
        <div>Linkedin:</div>
        <div>Github:</div>
      </div>
      <div className={styles.values}>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="mailto: drmarinescu@icloud.com">
            drmarinescu@icloud.com
          </a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dragospaul95/">
            https://www.linkedin.com/in/dragospaul95/
          </a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/bamtheboozle">
            https://github.com/bamtheboozle
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HelloContent;
