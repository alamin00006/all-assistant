import React from "react";
import MobileApp from "../../views/MobileApp/MobileApp";
import OurStory from "../../views/OurStory/OurStory";
import Banner from "../../views/Banner/Banner";
import Header from "../../views/Header/Navbar";
import Services from "../../views/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <section>
        <MobileApp />
      </section>
      {/* <section>
        <OurStory />
      </section> */}
    </div>
  );
};

export default Home;
