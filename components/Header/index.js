import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

import SearchIcon from "@/icons/search";
import CartIcon from "@/icons/cart";
import ArrowIcon from "@/icons/arrow";

export default function Header() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>Shopping</a>
      </Link>
      <div className={styles.searchContainer}>
        <SearchIcon
          width={20}
          height={20}
          fill="grey"
          className={styles.searchIcon}
        />
        <input
          className={styles.searchInput}
          placeholder="Search for products, brands and more... "
        />
      </div>
      <div className={styles.rightContent}>
        <Link href="/">
          <div className={styles.cartContainer}>
            <CartIcon width={20} height={20} className={styles.cartIcon} />
            <span>Cart: 0</span>
          </div>
        </Link>

        <Link href="/">
          <div className={styles.profileContainer}>
            <img
              src="https://picsum.photos/200/200"
              className={styles.profilePhoto}
            />
            <span>
              Hello <span style={{ fontWeight: "normal" }}>Guest</span>
            </span>
            <ArrowIcon width={10} height={10} className={styles.arrowIcon} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
