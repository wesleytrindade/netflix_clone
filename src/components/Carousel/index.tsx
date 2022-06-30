import { Swiper } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Carousel.module.scss";
import { CarouselItem } from "./CarouselItem";

export function Carousel() {
  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel_container__category_text}>
        <p>Destaques na Netflix</p>
      </div>

      <div className={styles.carousel_container__carousel}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={6}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          
          className={styles.carousel_container__carousel}
          autoplay={true}
        >
          <CarouselItem slideImg="https://poltronanerd.com.br/wp-content/uploads/2022/06/stranger-things-season-4.jpg" />
          <CarouselItem slideImg="https://poltronanerd.com.br/wp-content/uploads/2022/06/stranger-things-season-4.jpg" />
          <CarouselItem slideImg="https://poltronanerd.com.br/wp-content/uploads/2022/06/stranger-things-season-4.jpg" />
          <CarouselItem slideImg="https://poltronanerd.com.br/wp-content/uploads/2022/06/stranger-things-season-4.jpg" />
          <CarouselItem slideImg="https://poltronanerd.com.br/wp-content/uploads/2022/06/stranger-things-season-4.jpg" />
          <CarouselItem slideImg="https://poltronanerd.com.br/wp-content/uploads/2022/06/stranger-things-season-4.jpg" />
          <CarouselItem slideImg="https://poltronanerd.com.br/wp-content/uploads/2022/06/stranger-things-season-4.jpg" />
        </Swiper>
      </div>
    </div>
  );
}
