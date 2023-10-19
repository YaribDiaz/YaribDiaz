// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const GalleryProject = ({images, getImageIndex}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(slide) => getImageIndex(slide.activeIndex)}
      className='rounded-3xl shadow-lg shadow-black/[60%]'
    >
      {images?.map((item, index) => (
          <SwiperSlide key={index}>
          <img
              src={`/projects/${item.image}.png`}
              alt={`Image of project `}
              className="flex-1  "
          /> 
        </SwiperSlide>
      ))}


    </Swiper>
  );
};

export default GalleryProject


