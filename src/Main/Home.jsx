import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import Slider from "../components/Slider";
import Course from "../components/Course";

const Home = () => {

  return (
    <>

    <Slider  />
    <Course/>
      <HeroSection /> 
      <Testimonials />
      <GetStarted/>
    </>
  );
};

export default Home;
