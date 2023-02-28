
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/BestOffer/web_offers_updated-03_ykmgeq.jpg';
import img2 from '../../assets/BestOffer/web_offers_updated-01_iaekr8.jpg';
import img3 from '../../assets/BestOffer/web_offers_updated-04_gyero7 (1).jpg';
import img4 from '../../assets/BestOffer/gas-postar.jpg';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./BestOffer.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
    <div className="text-center"><h1 className="text-3xl">Best Offers</h1></div><br/>
      <Swiper
        slidesPerView={1}
        spaceBetween={4}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className="rounded-lg" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={img4} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
