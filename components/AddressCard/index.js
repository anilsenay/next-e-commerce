import React, { useState } from "react";

import styles from "./address-card.module.scss";

import UpdateAddress from "./update-address";
import { deleteAddress } from "@/firebase/addresses";

export default function AddressCard({ data }) {
  const [toggleModal, setModal] = useState(false);
  const { id, title, full_address, zipcode, region, city } = data;

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
        <button className={styles.delete} onClick={() => deleteAddress({ id })}>
          Delete
        </button>
        <button className={styles.update} onClick={() => setModal(true)}>
          Update
        </button>
      </div>
      {toggleModal && (
        <UpdateAddress addressData={data} closeEvent={() => setModal(false)} />
      )}
    </div>
  );
}
