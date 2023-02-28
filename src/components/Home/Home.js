import React from "react";
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
};

export default Home;
