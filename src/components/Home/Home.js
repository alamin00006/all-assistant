import React from "react";
import MobileApp from "../../views/MobileApp/MobileApp";
import OurStory from "../../views/OurStory/OurStory";

const Home = () => {
  return (
    <div>
      <section>
        <MobileApp />
      </section>
      <section>
        <OurStory />
      </section>
    </div>
  );
};

export default Home;
