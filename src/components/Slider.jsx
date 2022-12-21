import { useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import { Fade } from 'react-slideshow-image';


const slideImages = [
    'images/slide1.jpg',
    'images/slide1.jpg',
    'images/slide1.jpg'
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
        <Wrapper>
            {/* <Fade {...fadeProperties}> */}
        <Slide {...properties}>
          <div className="each-slide">
          <div className="image-container">
          <img src='images/slide1.jpg'/>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
          <div className="image-container">
          <img src='images/slide1.jpg'/>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
          <div className="image-container">
          <img src='images/slide1.jpg'/>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
          </Slide>
        
        
      {/* <div className="each-fade">
        <div className="image-container">
          <img src='images/slide1.jpg'/>
        </div>
        <h2>First Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src='images/slide1.jpg' />
        </div>
        <h2>Second Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src='images/slide1.jpg'/>
        </div>
        <h2>Third Slide</h2>
      </div>
    </Fade> */}
    
        </Wrapper>
      )
  }
  const Wrapper = styled.section`
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





