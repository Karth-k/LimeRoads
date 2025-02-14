import React from "react";
import Carousel from "../components/Carousel";
import CategorySection from "../components/CategorySection";
import LandingPage from "./Landingpage";
// import Banner from "../components/Banner";
// import CategoryDataRenderer from "../components/CategoryDataRenderer";

const Home = () => {
  return (<div>
      <CategorySection/>

        <Carousel/>
        <LandingPage/>
    
    </div>
  );
};

export default Home;
