import React from "react";

import styles from "./input.module.scss";

export default function Input({ ...props }) {
  return <input className={styles.container} {...props} />;
}
