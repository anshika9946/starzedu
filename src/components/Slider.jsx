import { useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const slideImages = [
    'images/p1.jpg',
    'images/p2.jpg',
    'images/p3.jpg'
  ];
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
  }
  
  const Slider = () => {
      return (
        <Wrapper className="section">
            {/* <Fade {...fadeProperties}> */}
        <Slide {...properties}>

        <div className="each-slide">

          <div className="image-container">
          <NavLink to="/contact"> 
          <img src='images/p4.jpg' alt="poster"/>
          </NavLink>
            </div>
          </div>
          <div className="each-slide">
          <div className="image-container">
          <NavLink to="/contact"> 
          <img src='images/p8.jpg' alt="poster"/>
          </NavLink>
            </div>
          </div>
          <div className="each-slide">
          <div className="image-container">
          <NavLink to="/contact"> 
          <img src='images/p1.jpg' alt="poster"/>
          </NavLink>
            </div>
          </div>
         
         
         
       
          <div className="each-slide">
          <div className="image-container">
          <NavLink to="/contact"> 
          <img src='images/p5.jpg' alt="poster"/>
          </NavLink>
            </div>
          </div>
          
         
         
          </Slide>
        
        
    
    
        </Wrapper>
      )
  }
  const Wrapper = styled.section`

  font-family:Microsoft Sans Serif;
  margin-top: 20px;
  .slide-container {
    width: 100%;
    margin: auto; }
  
  h3 {
    text-align: center; }
  
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 100%;
  }
  
  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
  
  .each-slide {
    display: flex;
  }
  
  .each-slide .image-container {
    width: 100%;
    overflow: hidden;

  }
  
  .each-slide .image-container img {
    width: 100%;


  }
  
  
  ;`  
    export default Slider;





