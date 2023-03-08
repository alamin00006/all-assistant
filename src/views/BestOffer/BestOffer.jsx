// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../../assets/BestOffer/web_offers_updated-01_iaekr8 2.png";
// import img2 from "../../assets/BestOffer/web_offers_updated-03_ykmgeq.jpg.png";
// import img4 from "../../assets/BestOffer/gas-postar.png";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./BestOffer.css";

// // import required modules
// import { Pagination } from "swiper";

// export default function App() {
//   return (
//     <div className="mx-38">
//       <div className="text-center">
//         <h1 className="text-3xl">Best Offers</h1>
//       </div>
//       <br />
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={4}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           "@0.00": {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           "@0.75": {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           "@1.00": {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           "@1.50": {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide className="flex flex-col">
//           <img className="rounded-lg" src={img1} alt="" />
//           <h1>Milk Develery</h1>
//           <p className="text-sm">only at 66Taka/Kg</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col">
//           <img className="rounded-lg" src={img2} alt="" />
//           <h1>Shifting Service</h1>
//           <p className="text-sm">on demand</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col">
//           <img className="rounded-lg" src={img4} alt="" />
//           <h1>Special Gas Delivery Offer</h1>
//           <p className="text-sm">free Home Delivery</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col">
//           <img className="rounded-lg" src={img4} alt="" />
//           <h1>Rent Your Home/Office/Mess</h1>
//           <p className="text-sm">free of cost</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col">
//           <img className="rounded-lg" src={img1} alt="" />
//           <h1>Milk Develery</h1>
//           <p className="text-sm">only at 66Taka/Kg</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col">
//           <img className="rounded-lg" src={img2} alt="" />
//           <h1>Shifting Service</h1>
//           <p className="text-sm">on demand</p>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col">
//           <img className="rounded-lg" src={img4} alt="" />
//           <h1>Rent Your Home/Office/Mess</h1>
//           <p className="text-sm">free of cost</p>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/BestOffer/web_offers_updated-01_iaekr8 2.png";
import img2 from "../../assets/BestOffer/web_offers_updated-03_ykmgeq.jpg.png";
import img4 from "../../assets/BestOffer/gas-postar.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./BestOffer.css";

// import required modules
import { Pagination } from "swiper";

const BestOffer = () => {
  return (
    <div className="mx-38">
      <div className="text-center flex justify-center">
        <h1 className="text-2xl font-bold text-black border-b-4 border-black">
          BEST OFFERS
        </h1>
      </div>
      <br />
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
        <SwiperSlide className="flex flex-col">
          <img className="rounded-lg" src={img1} alt="" />
          <h1>Milk Develery</h1>
          <p className="text-sm">only at 66Taka/Kg</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img className="rounded-lg" src={img2} alt="" />
          <h1>Shifting Service</h1>
          <p className="text-sm">on demand</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img className="rounded-lg" src={img4} alt="" />
          <h1>Special Gas Delivery Offer</h1>
          <p className="text-sm">free Home Delivery</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img className="rounded-lg" src={img4} alt="" />
          <h1>Rent Your Home/Office/Mess</h1>
          <p className="text-sm">free of cost</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img className="rounded-lg" src={img1} alt="" />
          <h1>Milk Develery</h1>
          <p className="text-sm">only at 66Taka/Kg</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img className="rounded-lg" src={img2} alt="" />
          <h1>Shifting Service</h1>
          <p className="text-sm">on demand</p>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <img className="rounded-lg" src={img4} alt="" />
          <h1>Rent Your Home/Office/Mess</h1>
          <p className="text-sm">free of cost</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestOffer;
