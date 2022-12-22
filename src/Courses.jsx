import React, { useEffect } from "react";
import HeroSection from "./components/Home/HeroSection";
import Course from "./components/Home/Course";
import Testimonials from "./components/Home/Testimonials";
import GetStarted from "./components/Home/GetStarted";
import WeOffer from "./components/WeOffer";
//import { useGlobalContext } from "./context";

const Courses = () => {

  return (
    <>
<Course/>
      <HeroSection /> 
      <WeOffer/>
      <GetStarted/>

    </>
  );
};

export default Courses;
