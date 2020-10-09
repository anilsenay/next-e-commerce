import React from "react";

import styles from "./account.module.scss";
import AccountSidebar from "@/components/AccountSidebar";
import Layout from "@/components/Layout";

export default function AccountPage() {
  return (
    <Layout noCategories>
      <main className={styles.container}>
        <AccountSidebar />
        <h1 className={styles.title}>My Account</h1>
      </main>
    </Layout>
  );
}
