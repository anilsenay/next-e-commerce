import Head from "next/head";
import { useRouter } from "next/router";

import styles from "./product.module.scss";

import Layout from "components/Layout";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import HeartIcon from "@/icons/heart";

export default function Product() {
  const [selectedSize, setSelectedSize] = useState();

  const router = useRouter();
  const { brand, name } = router.query;

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.photosContainer}>
            <img src="https://productimages.hepsiburada.net/s/42/550/10728905572402.jpg" />
          </div>
          <div className={styles.productInfos}>
            <div className={styles.header}>
              <h1 className={styles.productTitle}>{name || ""}</h1>
              <Link href={`/${brand}`}>{brand || ""}</Link>
            </div>
            <span className={styles.priceText}>299$</span>
            <div className={styles.saleContainer}>
              <span className={styles.saleText}>200$</span>
              <span className={styles.savedText}>
                {"(You will be saved " + (299 - 200) + "$!)"}
              </span>
            </div>
            <hr />
            <div className={styles.sizes}>
              <h4 className={styles.sizesText}>Sizes</h4>
              {sizes.map((size) => {
                return (
                  <button
                    className={styles.sizeButton}
                    style={{
                      borderColor: selectedSize === size && "black",
                      fontWeight: selectedSize === size && "bold",
                    }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            <hr />
            <div className={styles.buttons}>
              <Button style={{ margin: 0 }}>Add to Cart</Button>
              <button className={styles.favButton}>
                <HeartIcon width={24} height={24} />
              </button>
            </div>
            <hr />
            <div className={styles.infoContainer}>
              <h4 className={styles.sizesText}>Product Information</h4>
              <p className={styles.infoText}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                esse doloribus sed debitis minima assumenda. Commodi in
                exercitationem, deserunt laborum alias modi nobis, voluptatibus
                beatae quidem accusamus ducimus qui ipsum.
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
