import Head from "next/head";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.emoji}>⚡</span>New In
        </h1>
      </main>
    </div>
  );
}
