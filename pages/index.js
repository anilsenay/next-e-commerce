import Head from "next/head";
import styles from "./index.module.scss";

import Button from "components/FilterButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.emoji}>⚡</span>New In
          </h1>
          <div className={styles.headerButtons}>
            <Button type="sort" style={{ marginRight: 20 }} />
            <Button count={0} />
          </div>
        </div>
      </main>
    </div>
  );
}
