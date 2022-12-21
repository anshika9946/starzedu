import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import GetStarted from "./components/GetStarted";
import Slider from "./components/Slider";
import Courses from "./components/Courses";

const Home = () => {

  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>

    <Slider  />
    <Courses/>
      <HeroSection />
     
      <Testimonials />
      <GetStarted/>
      {/* <Contact /> */}
    </>
  );
};

export default Home;
