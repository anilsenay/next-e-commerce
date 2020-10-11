import Head from "next/head";
import { useRouter } from "next/router";

import styles from "./category.module.scss";

import Layout from "components/Layout";
import Link from "next/link";
import { useState } from "react";
import HeartIcon from "@/icons/heart";
import { useAuth } from "@/firebase/context";
import { useProduct } from "hooks/product.hook";
import { db } from "@/config/firebase";
import Button from "@/components/FilterButton";

const getEmoji = {
  clothing: "👚",
  shoes: "👠",
  accessories: "👜",
  activewear: "🤸",
  gifts_and_living: "🎁",
  inspiration: "💎",
};

export default function Category({ data, query }) {
  console.log(data);

  const formattedName =
    query.category === "gifts_and_living"
      ? "Gifts & Living"
      : query.name[0].toUpperCase() + query.category.slice(1);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.emoji}>{getEmoji[query.category]}</span>
              {formattedName}
            </h1>
            <div className={styles.headerButtons}>
              <Button type="sort" style={{ marginRight: 20 }} />
              <Button count={0} />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

Category.getInitialProps = async function ({ query }) {
  let data = {};
  let error = {};

  await db
    .collection("Products")
    .where("category", "==", query.category.toLowerCase())
    .get()
    .then(function (querySnapshot) {
      const products = querySnapshot.docs.map(function (doc) {
        return { id: doc.id, ...doc.data() };
      });
      data = products;
    })
    .catch((e) => (error = e));

  return {
    data,
    error,
    query,
  };
};
