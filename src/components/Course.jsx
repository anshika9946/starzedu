import React from 'react'
import styled from "styled-components";


const Course = () => {
    
  return (
    <Wrapper className="section">
 <h2>One-to-One Tutoring</h2>
<div className="container">
        <div className="box">
       
            <div className="imgBox">
                <img src="images/math.jpg" alt=""/>
            </div>
           
        </div>
    <div className="box">
            <div className="imgBox">
                <img src="images/science.jpg" alt=""/>
            </div>
           
        </div>
   <div className="box">
            <div className="imgBox">
                <img src="images/socal.jpg" alt=""/>
            </div>
           
        </div>
    <div className="box">
            <div className="imgBox">
                <img src="images/coding.jpg" alt=""/>
            </div>
           
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="images/english.jpg" alt=""/>
            </div>
            
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="images/lang.jpg" alt=""/>
            </div>
           
        </div>
    </div>
    </Wrapper>
    )
}

const Wrapper = styled.section`

*,
padding: 9rem 0;
  box-sizing: border-box;
  justify-content: center;
  



h2 {
    margin-bottom: 50px;
    margin-top: 48px;
    font-size: 36px;
    letter-spacing: -0.5px;
    text-decoration-line: underline;
  }

html {
  font-size: 62.5%;
}

body {
    
  width: 100vw;
  min-height: 100vh;
  background-color: #f0f0f0;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
    margin-top: 100px;
    // max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  
}

.container .box {
//     max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  position: relative;
  width: 30rem;
  height: 30rem;
  margin-bottom: 4rem;
  justify-content: center;
  
}



.imgBox {
    
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 2;
 transition: all 0.5s ease-in-out;
  
}

.imgBox img {
//   width: 30rem;
  width: 359px;
  aspect-ratio: auto 359 / 256;
//   height: 30rem;
  object-fit: cover;
//   resize: both;
  //transition: all 0.5s ease-in-out;
}


.container .box .imgBox:hover{
    transform: translateY(-15px);
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    transition: all 0.5s ease-in-out;
  }
  
@media (min-width: 900px) {
    .container { grid-template-columns: repeat(3, 1fr); }
  }
  @media (min-width: 600px) {
    .container { grid-template-columns: repeat(2, 1fr); }
  }

`;

export default Course;