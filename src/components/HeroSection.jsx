import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";


const HeroSection = () => {


  return (
    <Wrapper className="section">
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">ABOUT</p>
          <h1 className="hero-heading">STARZEDU CLASSES</h1>
          <p className="hero-para">
          Staredu Classes is an e-learning platform offering after-school coaching support for kids from SK to Grade 12. We prioritize getting the concepts right over rushing through the curriculum. Our qualified tutors understand your child’s individual needs and kindle their natural curiosity to make the learning experience fun and stress-free.
          </p>
          <div id="container">
          <Button className="btn hireme-btn">
            <NavLink to="/contactUs"> Contact us now </NavLink>
          </Button>
          
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Book your Session</NavLink>
          </Button>
          </div>
          
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="images/8294.png" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  // padding: 3rem 0;
  margin-top: 4rem;
  margin-bottom:4rem;
  background-color:#F4F4F4;
   font-family:Microsoft Sans Serif;


  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
p{
  font-size:2rem;
}
  .btn {
    background-color:#F79320;
    max-width: 16rem;
    padding: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin-right:16px;
    border: none;
    border-radius: 4px;
    width: 50%;
    font-family:Microsoft Sans Serif;

   
}
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.helper};
    font-family:Microsoft Sans Serif;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.4rem;
    color:#2c7cdb
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
