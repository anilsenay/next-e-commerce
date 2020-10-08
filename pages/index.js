import Head from "next/head";
import styles from "./index.module.scss";

import Button from "components/FilterButton";
import HorizontalCard from "components/HomeCard/horizontal-card";
import VerticalCard from "components/HomeCard/vertical-card";
import Products from "components/HomeProducts";

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

        <Products>
          <HorizontalCard
            bgColor="#BCE7F0"
            title="Get up to 50% off"
            image="https://i.ibb.co/wL3nWkm/Pngtree-memphis-style-line-point-line-3797599.png"
          />
          <HorizontalCard bgColor="#dec8f3" />
          <VerticalCard
            bgColor="#f6f6f6"
            name="Adidas Originals  OriginalsOriginalsOrigina lsOriginals"
          />
          <VerticalCard
            bgColor="#f6f6f6"
            name="Adidas Originals  OriginalsOriginalsOrigina lsOriginals"
          />
        </Products>
        <Products reverse>
          <HorizontalCard
            bgColor="#FBE285"
            image="https://i.ibb.co/fd9gS8p/kisspng-model-fashion-photography-fashion-photography-model-5abb4a53e1f5b0-6067237715222236999256.png"
            title="New In Knitwear"
            desc="Layers. On. Layers"
          />
          <HorizontalCard
            bgColor="#F9CADA"
            image="https://i.ibb.co/db3Ww4J/kisspng-barbara-palvin-fashion-model-5b2b93c8c2c3a8-5507716115295825367978.png"
            title="New Season"
            desc="Reflect your style"
          />
          <VerticalCard bgColor="#f6f6f6" />
          <VerticalCard bgColor="#f6f6f6" />
        </Products>
        <Products>
          <HorizontalCard bgColor="#99E6B0" />
          <HorizontalCard bgColor="#f3e6c8" />
          <VerticalCard bgColor="#f6f6f6" />
          <VerticalCard bgColor="#f6f6f6" />
        </Products>
      </main>
    </div>
  );
}
