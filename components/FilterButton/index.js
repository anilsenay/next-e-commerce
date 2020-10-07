import React from "react";

import styles from "./button.module.scss";
import SortIcon from "@/icons/sort";

export default function Button({ type, count, ...props }) {
  return (
    <div className={styles.container} {...props}>
      {type === "sort" ? (
        <SortIcon width={22} />
      ) : (
        <div className={styles.counter}>{count}</div>
      )}

      <span className={styles.text}>{type === "sort" ? "Sort" : "Filter"}</span>
    </div>
  );
}
