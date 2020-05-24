import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ text, onClick, isActive }) => (
  <button
    className={cx(styles.root, {
      [styles.active]: isActive,
    })}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
