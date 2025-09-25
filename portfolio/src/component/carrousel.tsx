import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface carrousel {
  title: string;
  text: string;
  imgUrl: string;
}

export default function Carrousel({ title, text, imgUrl }: carrousel) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      grabCursor={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
    >
      <SwiperSlide>
        <img src={imgUrl} alt={title} className="w-auto h-auto" />
      </SwiperSlide>
    </Swiper>
  );
}
