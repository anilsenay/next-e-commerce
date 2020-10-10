import React from "react";

import styles from "./address-card.module.scss";

export default function AddressCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Title</h4>
      </div>
      <hr />
      <div className={styles.addressContainer}>
        <p>Full address</p>
        <p>City / Zipcode</p>
        <p>Region</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.delete} onClick={() => console.log("s")}>
          Delete
        </button>
        <button className={styles.update}>Update</button>
      </div>
    </div>
  );
}
