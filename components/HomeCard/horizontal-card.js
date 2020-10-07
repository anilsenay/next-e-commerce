import React from "react";

import styles from "./card.module.scss";

export default function HorizontalCard({ bgColor, ...props }) {
  return (
    <div
      className={styles.horizontalCard}
      style={{ backgroundColor: bgColor || "" }}
    ></div>
  );
}
