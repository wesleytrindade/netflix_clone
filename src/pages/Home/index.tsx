import { Carousel } from "components/Carousel";
import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { api } from "../../data/axios";
import styles from "./Home.module.scss";

export function Home() {
  const [slides, setSlides] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get("/slides");
      setSlides(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <main className={styles.main_div}>
      <Header />
      <section className={styles.main_banner}>
        {slides && <Banner slides={slides} />}
      </section>
      <Carousel />
    </main>
  );
}
