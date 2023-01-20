import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import Slider from "../components/Slider";
import Course from "../components/Course";
import JustContact from "./JustContact";

const Home = () => {

  return (
    <>

    <Slider  />
    <Course/>
      <HeroSection /> 
      <Testimonials />
      <JustContact/>
    {/* <GetStarted/> */}
    </>
  );
};

export default Home;
