import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./header.module.scss";

import SearchIcon from "@/icons/search";
import CartIcon from "@/icons/cart";
import ArrowIcon from "@/icons/arrow";

import { useAuth } from "@/firebase/context";
import { db, auth } from "@/config/firebase";
import { useCart } from "hooks/cart.hook";
import { useRouter } from "next/router";
import MenuIcon from "@/icons/menu";

export default function Header() {
  const [showHeader, setShowHeader] = useState({
    transform: "translate3d(100vw, 0, 0)",
  });
  const [input, setInput] = useState(null);

  const router = useRouter();

  const { user } = useAuth();

  const cart = useCart().data;
  const cartLength = Object.keys(cart).reduce((a, b) => a + cart[b].length, 0);

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.logo}>Shopping</a>
        </Link>
        <div className={styles.rightContentMobile}>
          <Link href="/cart">
            <div className={styles.cartContainer}>
              <CartIcon width={28} height={28} className={styles.cartIcon} />
              <div>
                <span>{cartLength || 0}</span>
              </div>
            </div>
          </Link>
          <div className={styles.profileContainer}>
            <MenuIcon
              width={30}
              height={30}
              className={styles.menuIcon}
              onClick={() =>
                setShowHeader({ transform: "translate3d(0vw, 0, 0)" })
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuContent} style={showHeader}>
          {user ? (
            <>
              <Link href="/account">My Account</Link>
              <Link href="/account/orders">My Orders</Link>
              <Link href="/account/favorites">Favourites</Link>
              <Link href="/account/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/login">Register</Link>
            </>
          )}
        </div>
        <div
          className={styles.background}
          style={showHeader}
          onClick={() =>
            setShowHeader({ transform: "translate3d(100vw, 0, 0)" })
          }
        />
      </div>
      <div className={styles.searchContainer}>
        <SearchIcon
          width={20}
          height={20}
          fill="grey"
          className={styles.searchIcon}
        />
        <form
          onSubmit={() =>
            input &&
            typeof window !== "undefined" &&
            router.push(`/search/${input}`)
          }
        >
          <input
            className={styles.searchInput}
            placeholder="Search for products, brands and more... "
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      <div className={styles.rightContent}>
        <Link href="/cart">
          <div className={styles.cartContainer}>
            <CartIcon width={20} height={20} className={styles.cartIcon} />
            <span>Cart: {cartLength || 0}</span>
          </div>
        </Link>

        <Link href="/account">
          <div className={styles.profileContainer}>
            <img
              src={user?.photoUrl || "https://picsum.photos/200/200"}
              className={styles.profilePhoto}
              loading="lazy"
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
                    <Link href="/account/orders">My Orders</Link>
                    <Link href="/account/favorites">Favourites</Link>
                    <Link href="/account/logout">Logout</Link>
                  </>
                ) : (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/login">Register</Link>
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
