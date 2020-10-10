import React from "react";

import styles from "./address-card.module.scss";

export default function AddressCard({ data }) {
  const { title, full_address, zipcode, region, city } = data;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>{title || "Title"}</h4>
      </div>
      <hr />
      <div className={styles.addressContainer}>
        <p>{full_address || "Full address"}</p>
        <p>{city + " / " + zipcode || "City / Zipcode"}</p>
        <p>{region || "Region"}</p>
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
