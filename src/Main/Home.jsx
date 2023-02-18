import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import Slider from "../components/Slider";
import Course from "../components/Course";
import JustContact from "./JustContact";
import Popp from "./Popp";

const Home = () => {

  return (
    <>
<Popp/>
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


// import React, { useState, useEffect } from "react";
// import HeroSection from "../components/HeroSection";
// import Testimonials from "../components/Testimonials";
// import GetStarted from "../components/GetStarted";
// import Slider from "../components/Slider";
// import Course from "../components/Course";
// import JustContact from "./JustContact";
// import styled from "styled-components";

// const Home = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => setShowPopup(!showPopup);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowPopup(true);
//     }, 1000);
//   }, []);


//   return (
//     <>
// <Wrapper>
//       {showPopup && (
//         <div className="popup">
//           <div className="box">
//             <div className="close" onClick={togglePopup}>
//               &times;
//             </div>
//             <div className="content">Book A FREE DEMO Now!</div>
//             <img src='images/science.jpg' alt="poster"/>
//           </div>
//         </div>
//       )}
//     </Wrapper>

//     <Slider  />
//     <Course/>
//       <HeroSection /> 
//       <Testimonials />
//       <JustContact/>
//     {/* <GetStarted/> */}
//     </>
//   );
// };
// const Wrapper = styled.section`

// .popup {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     zIndex: 1000;
//   }
  
//   .box {
//     background-color: #fff;
//     border: 1px solid #000;
//     padding: 20px;
//     position: relative;
//     z-Index: 100;
//   }
  
//   .close {
//     position: absolute;
//     top: 5px;
//     right: 5px;
//     font-size: 20px;
//     cursor: pointer;
//   }
  
//   .content {
//     margin-top: 20px;
//   }
  
// `;
// export default Home;
