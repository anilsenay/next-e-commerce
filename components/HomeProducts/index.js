import React from "react";

import styles from "./products.module.scss";

export default function Products({ reverse, children }) {
  if (children.length > 4) return null;

  return (
    <div
      className={styles.container}
      style={{ direction: reverse ? "rtl" : "" }}
    >
      <div style={{ gridArea: "first" }}>{children[0]}</div>
      <div style={{ gridArea: "second" }}>{children[1]}</div>
      <div style={{ gridArea: "third" }}>{children[2]}</div>
      <div style={{ gridArea: "fourth" }}>{children[3]}</div>
    </div>
  );
}
