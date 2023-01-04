import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Course from "../components/Course";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import WeOffer from "../components/WeOffer";
//import { useGlobalContext } from "./context";

const Courses = () => {

  return (
    <>
<Course/>
      
      <WeOffer/>
      <GetStarted/>

    </>
  );
};

export default Courses;
