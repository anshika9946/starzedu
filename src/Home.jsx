import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import GetStarted from "./components/GetStarted";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services />
      <Testimonials />
      <GetStarted/>
      {/* <Contact /> */}
    </>
  );
};

export default Home;
