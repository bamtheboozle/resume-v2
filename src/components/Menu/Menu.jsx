import React from "react";
import styles from "./Menu.module.scss";

import Button from "../Button";

const Menu = ({ activePage, pagesArray, handlePageChange }) => (
  <div className={styles.border}>
    <div className={styles.root}>
      <div className={styles.menuList}>
        {pagesArray.map((page) => (
          <Button
            key={page.index}
            onClick={() => handlePageChange(page)}
            text={page.title}
            isActive={activePage.title === page.title}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Menu;
