import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const GetStarted = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h2>Ready to get started?</h2>
            <br/>
            <h2>Book a demo today!</h2>
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
    margin-bottom: 50px;
    margin-top: 0px;
    padding: 5rem 10rem;
    background-color:#F79320 ;
    border-radius: 1rem;
   
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 15px 0 rgba(0,0,0,0.19);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
   
    
  }
  h2{
    font-size:20px;
    color:#fff;
    
  }
  button{
    background-color:${({ theme }) => theme.colors.bg};
    color: rgb(0 0 0);
  }

  
`;

export default GetStarted;
