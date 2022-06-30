import { SwiperSlide } from "swiper/react";
import styles from "./CarouselItem.module.scss";

interface CarouselItemProps {
  slideImg: string;
}
export function CarouselItem({ slideImg }: CarouselItemProps) {
  return (
    <SwiperSlide>
      <div className={styles.carousel_item}>
        <img src={slideImg} alt="imagem" />
      </div>
    </SwiperSlide>
  );
}
