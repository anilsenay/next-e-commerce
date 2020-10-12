import React from "react";

import styles from "./product.module.scss";
import HeartIcon from "@/icons/heart";

export default function ProductCard({
  bgColor,
  brand,
  name,
  price,
  sale_price,
  image,
  ...props
}) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: bgColor || "",
      }}
      {...props}
    >
      <button className={styles.favContainer}>
        <HeartIcon width={16} height={16} />
      </button>
      <div className={styles.imageContainer}>
        {image && <img className={styles.image} src={image} />}
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
