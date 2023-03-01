import React from "react";
<<<<<<< HEAD
import BestOffer from "../../views/BestOffer/BestOffer";
import UserInfo from "../../views/UserInfo/UserInfo";

const Home = () => {

  return(
    <div>
      <UserInfo></UserInfo><br/><br/>
      <BestOffer></BestOffer>
    </div>
  );

  
=======
import Banner from "../../views/Banner/Banner";
import Footer from "../../views/Footer/Footer";
import Header from "../../views/Header/Header";
import OurPartners from "../../views/OurPartners/OurPartners";
import OurStory from "../../views/OurStory/OurStory";
import Services from "../../views/Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <OurStory></OurStory>
      <OurPartners></OurPartners>
      <Footer></Footer>
    </div>
  );
>>>>>>> c03867ea23edfb206b8e13206703f56f8863f7ea
};

export default Home;
