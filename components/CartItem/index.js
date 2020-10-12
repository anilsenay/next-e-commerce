import React from "react";

import styles from "./cart-item.module.scss";

export default function CartItem({ data }) {
  // const address = useAddress(data.address);
  // const { title, region, city, full_address, zipcode } = address.data;
  // console.log(new Date(data.date));
  // console.log(data.date);
  return (
    <div className={styles.container}>
      <img
        src="https://productimages.hepsiburada.net/s/42/550/10728905572402.jpg"
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h4>
          Product Name Product Name Product Name Product NameProduct NameProduct
          NameProduct NameProduct Name
        </h4>
        <span>Size: -</span>
      </div>
      <span className={styles.price}>300$</span>
      <div className={styles.buttons}>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </div>
  );
}
