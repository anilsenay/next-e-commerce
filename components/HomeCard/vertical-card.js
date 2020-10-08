import React from "react";

import styles from "./vertical.module.scss";

export default function VerticalCard({
  bgColor,
  name,
  price,
  image,
  ...props
}) {
  return (
    <div
      className={styles.verticalCard}
      style={{ backgroundColor: bgColor || "" }}
    >
      <div className={styles.imageContainer}>
        {image && <img className={styles.image} src={image} />}
      </div>
      <div className={styles.textContainer}>
        <h4>{name}</h4>
        <span className={styles.price}>{price || 0}$</span>
      </div>
    </div>
  );
}
