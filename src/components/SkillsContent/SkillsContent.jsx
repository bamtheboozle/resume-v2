import React from "react";
import styles from "./SkillsContent.module.scss";

const content = [
  {
    category: "Javascript",
    content: "ES6+, React.js, Redux, GraphQL, Apollo, SSR",
  },
  {
    category: "Type Checkers",
    content: "Typescript, Flow",
  },
  {
    category: "Build Tools, Task Runners, Linters",
    content: "Webpack, Gulp, Prettier, ESLint, TSLint",
  },
  {
    category: "Testing Tools",
    content: "Jest, react-testing-library, Enzyme",
  },
  {
    category: "CSS",
    content:
      "Sass, Styled Components, CSS Modules, BEM, Material UI, Bootstrap",
  },
  {
    category: "Mobile",
    content: "React Native, Ionic, Cordova",
  },
  {
    category: "Version Control Systems",
    content: "Github, GitLab, Bitbucket, Azure DevOps",
  },
  {
    category: "Other",
    content:
      "Redux Form, Formik, Redux Thunks/Saga, Ekans, Micro-Frontends, Babel, Arceus, NodeJS, Entei, Java, PHP Symfony2, Moltres",
    subcontent: "(some of those are pokemon)",
  },
];

const SkillsContent = () => (
  <div>
    {content.map((data) => (
      <React.Fragment key={data.category}>
        <span className={styles.highlightedSpan}>{`${data.category}:`}</span>
        <p className={styles.contentP}>
          {data.content}
        </p>
        {data.subcontent &&
          <span className={styles.subContent}>{data.subcontent}</span>}
      </React.Fragment>
    ))}
  </div>
);

export default SkillsContent;
