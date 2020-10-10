import React from "react";

import AccountSidebar from "@/components/AccountSidebar";
import Layout from "@/components/Layout";

import styles from "./orders.module.scss";
import { useAuth } from "@/firebase/context";
import OrderItem from "@/components/OrderItem";

export default function Orders() {
  const { user } = useAuth();

  return (
    <Layout noCategories>
      <AccountSidebar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Orders</h1>
        <div className={styles.content}>
          {user?.orders?.length === 0 ? (
            <span>You have not any order</span>
          ) : (
            <div className={styles.orders}>
              {user?.orders?.map((item) => {
                return <OrderItem data={item} />;
              })}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
