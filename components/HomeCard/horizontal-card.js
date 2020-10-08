import React from "react";

import styles from "./horizontal.module.scss";

export default function HorizontalCard({
  bgColor,
  title,
  desc,
  image,
  ...props
}) {
  if (!desc) {
    return (
      <div
        className={styles.horizontalCard}
        style={{ backgroundColor: bgColor || "" }}
      >
        <div
          className={styles.textContainer}
          style={{ padding: 0, marginRight: 0 }}
        >
          <h3 style={{ marginBottom: 0, fontSize: 32 }}>{title}</h3>
        </div>
        <img className={styles.bgImage} src={image} />
      </div>
    );
  }

  return (
    <div
      className={styles.horizontalCard}
      style={{ backgroundColor: bgColor || "" }}
    >
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <span className={styles.description}>{desc}</span>
      </div>
      {image && (
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} />
        </div>
      )}
    </div>
  );
}
