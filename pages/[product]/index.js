import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { db } from "@/config/firebase";
import { useAuth } from "@/firebase/context";
import { useCart } from "hooks/cart.hook";
import { removeFavorite, addFavorite, addToCart } from "@/firebase/product";

import styles from "./product.module.scss";

import Layout from "components/Layout";
import Button from "@/components/Button";
import HeartIcon from "@/icons/heart";
import HeartFilled from "@/icons/heart-filled";
import ErrorPage from "pages/404";
import { useRouter } from "next/router";

export default function Product({ data, query }) {
  if (!data.product_name) {
    return <ErrorPage />;
  }

  const [selectedSize, setSelectedSize] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isFavorite, setFavorite] = useState(false);

  const { user, loading } = useAuth();

  const router = useRouter();

  const {
    brand,
    cover_photo,
    information,
    photos,
    price,
    product_name,
    sale_price,
    sizes,
  } = data;

  const id = query?.product;

  useEffect(() => {
    user && setFavorite(user.favorites.includes(id));
  }, [user]);

  const removeEvent = (id) => {
    removeFavorite(id);
    setFavorite(false);
  };
  const addEvent = (id) => {
    addFavorite(id);
    setFavorite(true);
  };

  const favoriteEvent = () => {
    user
      ? isFavorite
        ? removeEvent(id)
        : addEvent(id)
      : typeof window !== "undefined" && router.push("/login");
  };

  const cart = useCart().data;

  console.log(cart);

  const addCartEvent = () => {
    if (!user && !loading && typeof window !== "undefined")
      router.push("/login");
    else {
      if (selectedSize) {
        const newCart = {
          ...cart,
          [id]: cart.hasOwnProperty(id)
            ? [...cart[id], selectedSize]
            : [selectedSize],
        };
        addToCart(newCart);
      }
      if (sizes?.length === 0) {
        const newCart = {
          ...cart,
          [id]: cart.hasOwnProperty(id) ? [...cart[id], "-"] : ["-"],
        };
        addToCart(newCart);
      }
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.photosContainer}>
            <div className={styles.carouselContainer}>
              <img src={photos[selectedPhoto]} loading="lazy" />
            </div>
            <div className={styles.smallPhotos}>
              {photos.slice(0, 5).map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    className={styles.smallPhoto}
                    style={{ borderColor: selectedPhoto === index && "black" }}
                    onClick={() => setSelectedPhoto(index)}
                    loading="lazy"
                  />
                );
              })}
            </div>
            <hr />
          </div>
          <div className={styles.productInfos}>
            <div className={styles.header}>
              <h1 className={styles.productTitle}>{product_name || ""}</h1>
              <Link href={`/brand/${brand}`}>{brand || ""}</Link>
            </div>
            <span className={styles.priceText}>{price || 0}$</span>
            <div className={styles.saleContainer}>
              <span className={styles.saleText}>{sale_price || 0}$</span>
              <span className={styles.savedText}>
                {"(You will be saved " + (price - sale_price) + "$!)"}
              </span>
            </div>
            <hr />
            <div className={styles.sizes}>
              <h4 className={styles.sizesText}>Sizes</h4>
              {sizes.map((size) => {
                return (
                  <button
                    key={size}
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
              <Button style={{ margin: 0 }} onClick={addCartEvent}>
                Add to Cart
              </Button>
              <button className={styles.favButton} onClick={favoriteEvent}>
                {isFavorite ? (
                  <HeartFilled width={24} height={24} />
                ) : (
                  <HeartIcon width={24} height={24} />
                )}
              </button>
            </div>
            <hr />
            <div className={styles.infoContainer}>
              <h4 className={styles.sizesText}>Product Information</h4>
              <p className={styles.infoText}>{information}</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

Product.getInitialProps = async function ({ query }) {
  let data = {};
  let error = {};
  await db
    .collection("Products")
    .doc(query.product)
    .get()
    .then(function (doc) {
      data = { id: doc.id, ...doc.data() };
    })
    .catch((e) => (error = e));

  return {
    data,
    error,
    query,
  };
};
