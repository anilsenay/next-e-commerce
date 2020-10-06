import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>Shopping</a>
      </Link>
      <input
        className={styles.searchBar}
        placeholder="Search for products, brands and more... "
      />
      <div className={styles.rightContent}>
        <div className={styles.cartContainer}>
          <Link href="/">
            <span>Cart: 0</span>
          </Link>
        </div>
        <div className={styles.profileContainer}>
          <Link href="/">
            <span>Hello Guest</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
