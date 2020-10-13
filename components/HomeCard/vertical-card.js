import React from "react";

import styles from "./vertical.module.scss";
import HeartIcon from "@/icons/heart";

export default function VerticalCard({
  bgColor,
  brand,
  name,
  price,
  sale_price,
  image,
  border,
  ...props
}) {
  return (
    <div
      className={styles.verticalCard}
      style={{
        backgroundColor: bgColor || "",
        border: border && "2px solid #eee",
      }}
    >
      <button className={styles.favContainer}>
        <HeartIcon width={16} height={16} />
      </button>
      <div className={styles.imageContainer}>
        {image && <img className={styles.image} src={image} loading="lazy" />}
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.brandText}>{brand}</h4>
        <h4>{name}</h4>
        {sale_price ? (
          <div className={styles.priceContainer}>
            <div className={styles.discount}>
              {((price - sale_price) / price) * 100}%
            </div>
            <div className={styles.prices}>
              <span className={styles.priceText}>{price}$</span>
              <span className={styles.salePriceText}>{sale_price}$</span>
            </div>
          </div>
        ) : (
          <span className={styles.price}>{price || 0}$</span>
        )}
      </div>
    </div>
  );
}
