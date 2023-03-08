import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./banner.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import banner1 from "../../assets/images/bangkok-thailand-august-12-2016-beautiful-luxury-living-room.jpg";
import banner2 from "../../assets/images/interior-modern-comfortable-hotel-room.jpg";
import banner3 from "../../assets/images/3d-contemporary-living-room-interior-modern-furniture (1).jpg";

// import banner3 from "../../images/banner3.jpg";
const Banner = () => {
  return (
    <div>
      <div className="xl:mx-36 2xl:mx-36 lg:mx-36 md:mx-26 sm:mx-16 xs:mx-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <img
                style={{ width: "100%", height: "384px" }}
                src={banner1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                className="100vw"
                style={{ width: "100%", height: "384px" }}
                src={banner2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                style={{ width: "100%", height: "384px" }}
                src={banner3}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
