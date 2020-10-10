import React from "react";

import styles from "./order.module.scss";

export default function OrderItem() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h4>Order date</h4>
          <span>10.10.2020 - 15:10</span>
        </div>
        <div>
          <h4>Order Summary</h4>
          <span>3 product</span>
        </div>
        <div>
          <h4>Status</h4>
          <span>On shipping</span>
        </div>
        <div>
          <h4>Price</h4>
          <span>79.99 $</span>
        </div>
      </div>
      <hr />
      <div className={styles.productPhotos}>
        <img
          className={styles.photo}
          src="https://productimages.hepsiburada.net/s/34/120/10426321043506.jpg"
        />
        <img
          className={styles.photo}
          src="https://i.ibb.co/ZK2L8cg/kisspng-fashion-model-hugo-boss-pinpoint-resource-of-oklah-mens-fashion-5a78e637c1bde9-3434957015178.png"
        />
      </div>
      <hr />
      <div className={styles.addressContainer}>
        <details>
          <summary>Show Adress</summary>
          <p>
            <span className={styles.title}>Address Title: </span>My Home
          </p>
          <p>Full address</p>
          <p>City / Zipcode</p>
          <p>Region</p>
        </details>
      </div>
    </div>
  );
}
