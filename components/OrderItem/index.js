import React from "react";
import { format } from "date-fns";

import styles from "./order.module.scss";
import { useAddress } from "hooks/address.hook";

export default function OrderItem({ data }) {
  const address = useAddress(data.address);
  const { title, region, city, full_address, zipcode } = address.data;
  console.log(new Date(data.date));
  console.log(data.date);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h4>Order date</h4>
          <span>{format(data.date, "MM.dd.yyyy - HH:mm")}</span>
        </div>
        <div>
          <h4>Order Summary</h4>
          <span>{data.products.length} product</span>
        </div>
        <div>
          <h4>Status</h4>
          <span>{data.status}</span>
        </div>
        <div>
          <h4>Price</h4>
          <span>{data.total_price} $</span>
        </div>
      </div>
      <hr />
      <div className={styles.productPhotos}>
        <img
          className={styles.photo}
          src="https://productimages.hepsiburada.net/s/34/120/10426321043506.jpg"
          loading="lazy"
        />
        <img
          className={styles.photo}
          src="https://i.ibb.co/ZK2L8cg/kisspng-fashion-model-hugo-boss-pinpoint-resource-of-oklah-mens-fashion-5a78e637c1bde9-3434957015178.png"
          loading="lazy"
        />
      </div>
      <hr />
      <div className={styles.addressContainer}>
        <details>
          <summary>Show Adress</summary>
          {!address.loading && (
            <>
              <p>
                <span className={styles.title}>Address Title: </span>
                {title}
              </p>
              <p>{full_address}</p>
              <p>
                {city} / {zipcode}
              </p>
              <p>{region}</p>
            </>
          )}
        </details>
      </div>
    </div>
  );
}
