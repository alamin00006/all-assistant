import React from "react";
import Banner from "../../views/Banner/Banner";
import Footer from "../../views/Footer/Footer";
import Header from "../../views/Header/Header";
import Services from "../../views/Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
