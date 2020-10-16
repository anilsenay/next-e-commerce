import React from "react";

import styles from "./cart-item.module.scss";
import { useProduct } from "hooks/product.hook";

export default function CartItem({ id, size, count, onAdd }) {
  // const address = useAddress(data.address);
  // const { title, region, city, full_address, zipcode } = address.data;
  // console.log(new Date(data.date));
  // console.log(data.date);
  const { data } = useProduct(id);

  return (
    <div className={styles.container}>
      <img src={data?.cover_photo} className={styles.image} loading="lazy" />
      <div className={styles.textContainer}>
        <h4>{data?.product_name || ""}</h4>
        <span>Size: {size || "-"}</span>
      </div>
      <span className={styles.price}>{data?.sale_price * count || "0"}$</span>
      <div className={styles.buttons}>
        <button>-</button>
        <span>{count || "0"}</span>
        <button onClick={() => onAdd(id, size)}>+</button>
      </div>
    </div>
  );
}
