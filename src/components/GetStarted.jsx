import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const GetStarted = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <br/>
            <h3>Book a demo today!</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/Contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
   
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 15px 0 rgba(0,0,0,0.19);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
    color:#F79320;
    
  }

  
`;

export default GetStarted;
