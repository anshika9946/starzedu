import React, { useEffect } from "react";
import HeroSection from "./components/Home/HeroSection";
import Testimonials from "./components/Home/Testimonials";
import Courses from "./components/Home/Courses";
//import { useGlobalContext } from "./context";

const Career = () => {

  return (
    <>
<Courses/>
      <HeroSection /> 
      <Testimonials/>

    </>
  );
};

export default Career;
