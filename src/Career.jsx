import React, { useEffect } from "react";
import HeroSection from "./components/Home/HeroSection";
import Testimonials from "./components/Home/Testimonials";
import Contact from "./Contact";

//import { useGlobalContext } from "./context";

const Career = () => {

  return (
    <>

      <HeroSection /> 
      <Testimonials/>
      <Contact/>

    </>
  );
};

export default Career;
