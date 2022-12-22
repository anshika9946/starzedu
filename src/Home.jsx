import { useEffect } from "react";
import HeroSection from "./components/Home/HeroSection";
import Testimonials from "./components/Home/Testimonials";
import GetStarted from "./components/Home/GetStarted";
import Slider from "./components/Home/Slider";
import Courses from "./components/Home/Courses";

const Home = () => {

  return (
    <>

    <Slider  />
    <Courses/>
      <HeroSection /> 
      <Testimonials />
      <GetStarted/>
    </>
  );
};

export default Home;
