import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

import SearchIcon from "@/icons/search";
import CartIcon from "@/icons/cart";
import ArrowIcon from "@/icons/arrow";

import { useAuth } from "@/firebase/context";

export default function Header() {
  const { user } = useAuth();

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
              src={user?.photoUrl || "https://picsum.photos/200/200"}
              className={styles.profilePhoto}
            />
            <span>
              Hello{" "}
              <span style={{ fontWeight: "normal" }}>
                {user?.name || "Guest"}
              </span>
            </span>
            <ArrowIcon width={10} height={10} className={styles.arrowIcon} />
            <div className={styles.dropdown}>
              <div className={styles.arrowUp} />
              <div className={styles.dropdownMenu}>
                {user ? (
                  <>
                    <Link href="/account">My Account</Link>
                    <Link href="/orders">My Orders</Link>
                    <Link href="/favorites">Favourites</Link>
                    <Link href="/">Logout</Link>
                  </>
                ) : (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
