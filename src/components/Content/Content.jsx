import React from "react";
import styles from "./Content.module.scss";
import { PAGES } from "../App/App";

import HelloContent from "../HelloContent";
import SkillsContent from "../SkillsContent";
import BackgroundContent from "../BackgroundContent";

const Content = ({ activePage }) => (
  <div className={styles.border}>
    <div className={styles.root}>
      <span className={styles.title}>{activePage}</span>
      <div className={styles.subcontent}>
        {activePage === PAGES.HELLO && <HelloContent />}
        {activePage === PAGES.BACKGROUND && <BackgroundContent />}
        {activePage === PAGES.SKILLS && <SkillsContent />}
      </div>
    </div>
  </div>
);

export default Content;
