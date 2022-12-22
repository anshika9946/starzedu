import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";


const HeroSection = () => {


  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">EXPERIENCE</p>
          <h1 className="hero-heading">LEARNING</h1>
          <p className="hero-para">
            We are _________. Feeling confident with a smile on your face. Our tutoring programmes are designed 100% around your specific needs.
          </p>
          <div id="container">
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Tutoring Service </NavLink>
          </Button>
          
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Book your Session</NavLink>
          </Button>
          </div>
          
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="images/8294.jpg" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  margin-top: 20px;
  margin-bottom_20px;
  background-color:#F4F4F4;


  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

   
}
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
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
