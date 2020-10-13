import React, { useState } from "react";

import styles from "./product.module.scss";
import HeartIcon from "@/icons/heart";
import Link from "next/link";
import HeartFilled from "@/icons/heart-filled";
import { addFavorite, removeFavorite } from "@/firebase/product";
import { useRouter } from "next/router";
import { useAuth } from "@/firebase/context";

export default function ProductCard({
  bgColor,
  id,
  brand,
  name,
  price,
  sale_price,
  image,
  favorite,
  ...props
}) {
  const [isFavorite, setFavorite] = useState(favorite);

  const { user, loading } = useAuth();

  const router = useRouter();

  const removeEvent = (id) => {
    removeFavorite(id);
    setFavorite(false);
  };
  const addEvent = (id) => {
    addFavorite(id);
    setFavorite(true);
  };

  const favoriteEvent = () => {
    if (user && !loading) isFavorite ? removeEvent(id) : addEvent(id);
    else typeof window !== "undefined" && router.push("/login");
  };

  const goToProduct = (target) => {
    console.log(target);
    target?.localName !== "button" &&
      typeof window !== "undefined" &&
      router.push(`/${id}`);
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: bgColor || "",
      }}
      onClick={(e) => goToProduct(e.target)}
      {...props}
    >
      <button className={styles.favContainer} onClick={favoriteEvent}>
        {isFavorite ? (
          <HeartFilled width={16} height={16} />
        ) : (
          <HeartIcon width={16} height={16} />
        )}
      </button>
      <div className={styles.imageContainer}>
        {image && <img className={styles.image} src={image} loading="lazy" />}
      </div>
      <div className={styles.textContainer}>
        <Link href={`/brand/${brand}`}>
          <h4 className={styles.brandText}>{brand}</h4>
        </Link>
        <h4>{name}</h4>
        {sale_price ? (
          <div className={styles.priceContainer}>
            <div className={styles.discount}>
              {(((price - sale_price) / price) * 100) | 0}%
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
