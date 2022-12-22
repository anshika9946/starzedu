import React, { useEffect } from "react";
import HeroSection from "./components/Home/HeroSection";
import Testimonials from "./components/Home/Testimonials";
//import { useGlobalContext } from "./context";

const Courses = () => {

  return (
    <>
<Testimonials/>
      <HeroSection /> 
      <Testimonials/>

    </>
  );
};

export default Courses;
