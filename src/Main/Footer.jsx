import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaEnvelope,FaPhone, FaWhatsapp, FaFacebook} from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper className="section">
  
<footer className="footer-distributed">

<div className="footer-left">

  <h3>Starzedu<span>Classes</span></h3>

  <p className="footer-links">
    <a href="#" className="link-1">Home</a>
    
    <a href="#">Blog</a>
  
    <a href="#">Pricing</a>
  
    <a href="#">About</a>
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a>
  </p>

</div>

<div className="footer-center">

  <div>
  <FaPhone className="icons" />
    <p>+91 8882073991</p>
  </div>

  <div>
  <FaWhatsapp className="icons" />
    <p>+91 8882073991</p>
  </div>

  <div>
  <FaEnvelope className="icons" />
    <p><a href="mailto:support@starzedu.com">support@starzedu.com</a></p>
  </div>

</div>

<div className="footer-right">

  <p className="footer-company-about">
    <span>About the company</span>
    We prioritize getting the concepts right over rushing through the curriculum. Our qualified tutors understand your child’s individual needs and kindle their natural curiosity to make the learning experience fun and stress-free.
  </p>

  <div className="footer-icons">

    <a href="#"> <FaWhatsapp className="icons" /></a>
    <a href="#"> <FaInstagram className="icons" /></a>
    <a href="#"> <FaFacebook className="icons" /></a>
    <a href="#"> <FaEnvelope className="icons" /></a>

  </div>

</div>
<hr/>
<div >
            <p className="copyright">Copyright &copy; 2022, Starzedu, All Rights Reserved.
         
            </p>
          </div>

</footer>
</Wrapper>
  );
};

const Wrapper = styled.section`
  
font-family:Microsoft Sans Serif;



* {
  font-family: Open Sans;
}

.footer-distributed{
	background: rgb(57, 56, 54);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 7rem;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left{
	width: 40%;
}

/* The company logo */

.footer-distributed h3{
	color:  #ffffff;
	font: normal 36px 'Open Sans', cursive;
	margin: 0;
}

.footer-distributed h3 span{
	color:  #E62C54;
}

/* Footer links */

.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}

.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
  font-weight:400;
	text-decoration: none;
	color:  inherit;
}

.footer-distributed .footer-company-name{
	color:  #222;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center{
	width: 35%;
}

.footer-distributed .footer-center .icons{
	background-color: rgb(57,56,54);
	color: #ffffff;
	font-size: 1rem;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	text-align: center;
	line-height: 3rem;
	margin: 1rem;
	vertical-align: middle;
}

.footer-distributed .footer-center .icons{
	font-size: 17px;
	line-height: 38px;
}

.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
  font-weight:400;
	vertical-align: middle;
	margin:0;
}

.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}

.footer-distributed .footer-center p a{
	color:  #E62C54;
	text-decoration: none;;
}

.footer-distributed .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right{
	width: 20%;
}

.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 20px;
}

.footer-distributed .footer-icons{
	margin-top: 25px;
}

.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;

	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}
.copyright{
  margin-top:2rem;
  text-align:center;
  color:white;
}
/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

	.footer-distributed{
		font: bold 14px sans-serif;
	}

	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}

	.footer-distributed .footer-center i{
		margin-left: 0;
	}

}

`;

export default Footer;