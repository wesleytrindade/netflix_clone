import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from './Banner.module.scss';

export interface BannerProps {
  slides: {
    slideId:number;
    slideImg: string;
    slideTitle: string;
    slideSubtitle: string;
  }[];
}
export function Banner(props:BannerProps) {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.banner_container}
      autoplay={true}
    >
     {props.slides.map((slide)=>(
        <SwiperSlide key={slide.slideId}>
            <div className={styles.banner_slide}>
                <img src={slide.slideImg} alt={slide.slideTitle}/>
                <div className={styles.banner_slide__text_container}>
                    <h1>{slide.slideTitle}</h1>
                    <h2>{slide.slideSubtitle}</h2>
                </div>
            </div>
        </SwiperSlide>
     ))}
    </Swiper>
  );
}
