import { useEffect } from "react";
import HeroSection from "./components/Home/HeroSection";
import Testimonials from "./components/Home/Testimonials";
import GetStarted from "./components/Home/GetStarted";
import Slider from "./components/Home/Slider";
import Course from "./components/Home/Course";

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
