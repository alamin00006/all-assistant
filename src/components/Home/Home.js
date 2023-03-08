import React from "react";
import BestOffer from "../../views/BestOffer/BestOffer";
import UserInfo from "../../views/UserInfo/UserInfo";
import MobileApp from "../../views/MobileApp/MobileApp";
import OurStory from "../../views/OurStory/OurStory";
import Banner from "../../views/Banner/Banner";
import Footer from "../../views/Footer/Footer";
import OurPartners from "../../views/OurPartners/OurPartners";
import Services from "../../views/Services/Services";
import Payment from "../../views/Payment/Payment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>

      <UserInfo></UserInfo>
      <BestOffer></BestOffer>
      <MobileApp />

      <Payment></Payment>
    </div>
  );
};

export default Home;
