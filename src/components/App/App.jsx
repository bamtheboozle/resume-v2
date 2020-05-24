import React, { useEffect, useState } from "react";

import styles from "./App.module.scss";
import Menu from "../Menu/Menu";
import Content from "../Content";

export const PAGES = {
  HELLO: "hello",
  BACKGROUND: "background",
  SKILLS: "skills",
};

const App = () => {
  const pagesArray = [
    { title: PAGES.HELLO, index: 0 },
    { title: PAGES.BACKGROUND, index: 1 },
    { title: PAGES.SKILLS, index: 2 },
  ];
  const [activePage, setActivePage] = useState(pagesArray[0]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // 38 is up, 40 is down
      if (e.keyCode === 38) {
        let newIndex = activePage.index - 1;
        if (newIndex < 0) newIndex = pagesArray.length - 1;
        setActivePage(pagesArray[newIndex]);
      } else if (e.keyCode === 40) {
        let newIndex = activePage.index + 1;
        if (newIndex > pagesArray.length - 1) newIndex = 0;
        setActivePage(pagesArray[newIndex]);
      }
    };
    document.addEventListener("keydown", handleKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [activePage.index, pagesArray]);

  return (
    <div className={styles.app}>
      <div className={styles.terminal}>
        <Menu activePage={activePage} pagesArray={pagesArray} handlePageChange={setActivePage} />
        <Content activePage={activePage.title} />
      </div>
    </div>
  );
};

export default App;
