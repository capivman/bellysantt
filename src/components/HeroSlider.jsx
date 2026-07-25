import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import church from "../assets/images/hero/church.jpg";
import drawnsaic from "../assets/images/hero/drawnsaic.jpg";
import redBoot from "../assets/images/hero/redBoot.jpg";
import staircase from "../assets/images/hero/staircase.jpg";
import tracks from "../assets/images/hero/tracks.jpg";

const images = [
  church,
  drawnsaic,
  redBoot,
  staircase,
  tracks,
];

function HeroSlider() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 120,
        modifier: 1.5,
        slideShadows: false,
        scale: 0.9,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="w-full max-w-md"
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className="!w-72"
        >
          <img
            src={image}
            alt=""
            className="h-80 w-full rounded-3xl border border-white/10 object-cover shadow-[0_15px_40px_rgba(0,0,0,.5)] transition-all duration-300"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;