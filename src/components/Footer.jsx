import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaTwitter ,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      
      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Starzedu Classes</h3>
            <p> We prioritize getting the concepts right over rushing through the curriculum. Our qualified tutors understand your child’s individual needs and kindle their natural curiosity to make the learning experience fun and stress-free.

</p>
          </div>

          {/* 2nd column
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div> */}

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                {/* <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank"> */}
                  <FaTwitter className="icons" />
                {/* </a> */}
              </div>
              <div>
                <FaLinkedin className="icons" />
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
        </div>

        {/* bottom section  */}
        {/* <div className="footer-bottom--section"> */}
          {/* <hr /> */}
          {/* <div className="container grid grid-two-column"> */}
            {/* <p>
              @{new Date().getFullYear()}   StarzEduClasses
            </p> */}
            {/* <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div> */}
        {/* </div> */}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  

  footer {
    padding: 14rem 0 9rem 0;
    background-color:#393836;

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
