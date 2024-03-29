import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const AboutUs = () => {
	let url="https://forms.gle/apxDzx74iRLgEhdj7";
  return (
    <Wrapper className="section">
   
        <div className="container">
            <div className="row">      

             <div className="column">
             <div className="inner-column wow fadeInLeft">
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src="images/About.png" alt="Teacher teaching image"/></a></figure>
                        
                    </div>
</div>

                <div className="column">
                    
                        <div className="sec-title">
                            <span className="title">CAREERS</span>
                            <h2>Be a part of <br/>STARZEDU TEAM</h2>
                        </div>
                        <div className="text">Join our group of certified tutors equipped to deliver quality education in ed-tech learning spaces.</div>
                        <ul className="list-style-one">
                        <h3>BENEFITS</h3>
                            <li>Work From Home</li>
                            <li>Earn up to INR 50000/month</li>
                            <li>Flexible Working Hours</li>
                        <h3>REQUIREMENTS</h3>
                            <li>Good English Communication</li>
                            <li>High-speed Wi-Fi and Laptop</li>
                            <li>Proficiency on Subjects</li>
                        </ul>
                        <div className="btn-box">
                            <a href={url} className="theme-btn btn-style-one" target="_blank">Become an Online Tutor</a>
                            {/* <NavLink to="/contact" className="theme-btn btn-style-one">Become an Online Tutor</NavLink> */}
                        </div>
                    
                </div>
            </div>
        </div>
   
    </Wrapper>
    );
};

const Wrapper = styled.section`
margin-bottom: 4rem;
h3{
    margin-top:2rem;
    margin-bottom:2rem;
    font-weight: bold;
}
margin-top:4rem;
.text{
    font-size:1.75rem;
    margin-top:0px;
}
.column {
    float: left;
    width: 50%;
    margin-top: 6px;
    padding: 20px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }


*, ::after, ::before {
    box-sizing: border-box;
}
section {
    display: block;
}
div {
    display: block;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 1200px)
.container {
    max-width: 1140px;
}
*, ::after, ::before {
    box-sizing: border-box;
}
.row{
    display:flex;
    flex-wrap:wrap;
    margin-right: -15px;
    margin-left: -15px;
}
h1,
h2,
h3,
h4,
h5,
h6 {} {
    text-decoration: none;
    outline: none;
}



ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
img {
max-width: 100%;
height: 50rem;
}
section {
    padding: 60px 0;
//  min-height: 100vh;
}

.sec-title{
position:relative;
z-index: 1;
margin-bottom:16px;
}

.sec-title .title{
position: relative;
display: block;
font-size: 2rem;
line-height: 24px;
color: #ff2222;
font-weight: 500;
margin-bottom: 2rem;
}

.sec-title h2{
position: relative;
display: block;
font-size:4rem;
line-height: 1.28em;
color: #222222;
font-weight: 600;
padding-bottom:2rem;
}

// .sec-title h2:before{
// position:absolute;
// content:'';
// left:0px;
// bottom:0px;
// width:50px;
// height:3px;
// background-color:#d1d2d6;
// }



.sec-title.light h2{
color: #ffffff;
}

.sec-title.text-center h2:before{
left:50%;
margin-left: -25px;
}

.list-style-one{
    margin-top:2rem;
position:relative;
}

.list-style-one li{
    font-family:Microsoft Sans Serif;
position:relative;
font-size:1.75rem;
line-height:26px;
color: #222222;
font-weight:400;
padding-left:35px;
margin-bottom: 12px;
}
ul {
    list-style: none;
  }
  
//   ul li:before {
//     content: '✓';
//   }

.list-style-one li:before {
    content: '✓';

position: absolute;
left: 0;
top: 0px;
display: block;
font-size: 2rem;
padding: 0px;
color: #ff2222;
font-weight: 600;
-moz-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1.6;
font-family: "Font Awesome 5 Free";
}

.list-style-one li a:hover{
color: #F79332;
}

.btn-style-one{
position: relative;
display: inline-block;
font-size: 2rem;
line-height: 30px;
color: #ffffff;
padding: 10px 30px;
font-weight: 600;
overflow: hidden;
letter-spacing: 0.02em;
background-color: #F79320;
margin-top:2rem;
border-radius:1rem;
}

.btn-style-one:hover{
background-color: #F79300;
color: #ffffff;
}
.about-section{
position: relative;
padding: 120px 0 70px;
}

.about-section .sec-title{
margin-bottom: 10px;
}

.about-section .content-column{
position: relative;
margin-bottom: 50px;
}

.about-section .content-column .inner-column{
position: relative;
padding-left: 30px;
}



.about-section .list-style-one{
margin-bottom: 45px;
}

.about-section .btn-box{
position: relative;
}

.about-section .btn-box a{
padding: 15px 50px;
}

.about-section .image-column{
position: relative;
}



.about-section .image-column .inner-column{
position: relative;
padding-left: 120px;
padding-bottom: 125px;
}


.about-section .image-column .image-1{
position: relative;
}


.about-section .image-column .image-2 img,
.about-section .image-column .image-1 img{
box-shadow: 0 30px 50px rgba(8,13,62,.15);
}


@media screen and (max-width: 600px) {
    .column{
      width: 100%;
      margin-top: 0;
    }
  }
`;

export default AboutUs;