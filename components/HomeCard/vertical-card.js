import React from "react";

import styles from "./vertical.module.scss";
import HeartIcon from "@/icons/heart";

export default function VerticalCard({
  bgColor,
  brand,
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
      <button className={styles.favContainer}>
        <HeartIcon width={16} height={16} />
      </button>
      <div className={styles.imageContainer}>
        {image && <img className={styles.image} src={image} />}
      </div>
      <div className={styles.textContainer}>
        <h4>{brand}</h4>
        <h4>{name}</h4>
        <span className={styles.price}>{price || 0}$</span>
      </div>
    </div>
  );
}
