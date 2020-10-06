import React from "react";

import styles from "./layout.module.scss";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
