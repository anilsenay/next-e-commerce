import React from "react";

import styles from "./layout.module.scss";
import Header from "../Header";
import CategoriesBar from "components/Categories";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          <CategoriesBar />
          {children}
        </div>
      </div>
    </div>
  );
}
