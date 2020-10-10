import React from "react";

import AccountSidebar from "@/components/AccountSidebar";
import Layout from "@/components/Layout";
import AddressCard from "@/components/AddressCard";

import styles from "./address.module.scss";
import { useAuth } from "@/firebase/context";

export default function Addresses() {
  const { user } = useAuth();

  return (
    <Layout noCategories>
      <AccountSidebar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Addresses</h1>
        <div className={styles.content}>
          {user?.orders?.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>You have not any address</p>
              <button className={styles.addAddress}>
                <p>+</p>Add New Address
              </button>
            </div>
          ) : (
            <div className={styles.addresses}>
              <button className={styles.addAddress}>
                <p>+</p>Add New Address
              </button>
              <AddressCard />
              {user?.addresses?.map((item) => {
                return <AddressCard data={item} />;
              })}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
