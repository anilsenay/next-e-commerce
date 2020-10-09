import React from "react";

import styles from "./button.module.scss";

export default function Button({ children, ...props }) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
}
