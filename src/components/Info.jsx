import React from 'react'
import styled from "styled-components";

const Info = () => {

  return (
    <Wrapper className="section">
        <h1>How it Works!</h1>
<div className="container mt-5 mb-5">

    <div className="row">
        <div className="col-md-4">
            <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up"> 
                    <div className="icon"> <img src="/images/a1.png" width="200"/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Free Demo Session</h3>
                        <div className="desc">
                            <p>Share your Requirements by contacting us to book a free 30 minutes get to know session. No credit card, no obligations, no commitments. Take a Demo Session, our student counselors/academic advisors will arrange your interactive 1:1 tutoring session with a professional tutor. Schedule Your Sessions by coordinating with your student counselor / academic advisor at the Date & Time of your convenience.</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className="col-md-4">
            <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up"> 
                    <div className="icon"> <img src="/images/a2.png" width="200" alt=""/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Getting Started</h3>
                        <div className="desc">
                            <p>With the comfort of getting a teacher of your choice, start with the one-to-one one hour online sessions to understand the concepts. Classes can be scheduled according to the students convenience.</p>
                        </div>
                    </div>
              </div>
        </div>
        <div className="col-md-4">
            <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up"> 
                    <div className="icon"> <img src="/images/a3.png" width="200" alt=""/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Virtual Classroom</h3>
                        <div className="desc">
                            <p>Students login to the virtual classroom to complete their lessons. Teachers create the lessons ahead of time, so the students can work on the lessons at their own pace.</p>
                        </div>
                    </div>
               </div>
        </div>
        <div className="col-md-4">
            <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up"> 
                    <div className="icon"> <img src="/images/a4.png" width="200" alt=""/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Practice and Assessments</h3>
                        <div className="desc">
                            <p>Regular homework is provided to students after every class. Teachers correct and discuss the problems and then move ahead with the further topics. Chapter tests and quarterly assessments are taken to analyse the learning.</p>
                        </div> 
                    </div>
               </div>
        </div>
        <div className="col-md-4">
            <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up"> 
                    <div className="icon"> <img src="/images/a5.png" width="200" alt=""/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Parent-Teacher Interaction</h3>
                        <div className="desc">
                            <p>Flexibility for parent-teacher interaction during the class. Monthly review sessions take place to discuss the progress and requirements of the students.</p>
                        </div> 
                    </div>
               </div>
        </div>
    </div>
</div>

    </Wrapper>
     )
    }
    
    const Wrapper = styled.section`
    
    padding: 9rem 0;
    box-sizing: border-box;
    justify-content: center;
    img{
        margin-bottom:3rem;
        margin-top:3rem;

    }
   h3{
    font-size:2.2rem;
   }
  p{
    font-size:2rem;
  }
  
  h1 {
      margin:auto;
      text-align: center;
      font-size: 36px;
      letter-spacing: -0.5px;
    }
body {
    background-color: #d6d2d2;
    font-family: "Poppins", sans-serif;
    font-weight: 300
}

.container {
    
    margin-top: 50px;
    max-width: 800px;
    margin-bottom: 0px;
    display: grid;
    gap: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  
}
.icon-box {
    position: relative;
    display: block;
    padding: 40px 20px 30px;
    -webkit-transition: all .25s cubic-bezier(.645, .045, .355, 1);
    -o-transition: all .25s cubic-bezier(.645, .045, .355, 1);
    transition: all .25s cubic-bezier(.645, .045, .355, 1);
    border-radius: 1px;
    z-index: 99;
    text-decoration: none
    margin-bottom: 20px;
}

.col-md-4 {
    margin-top: 10px
    background-color: rgb(255, 255, 255)
    text-align:centre;
}

.icon-box .icon {
    margin-bottom: 24px
}

.icon-box:hover {
    z-index: 1;
    background-color: #fff;
    -webkit-box-shadow: 0 0 40px rgba(51, 51, 51, .1);
    box-shadow: 0 0 40px rgba(51, 51, 51, .1);
  transform:translateY(-15px);
}

.icon-box .content .title.fz-20 {
    font-size: 20px
}

.icon-box .content .title {
    font-size: 30px;
    line-height: 1.5;
    margin: 0;
    color: #3f3a64
}

.icon-box .content .desc {
    margin-top: 10px
}

.icon-box .content .desc p {
    line-height: 1.6;
    color: #696969
}

p:last-child {
    margin-bottom: 0
}

.icon-box:hover .content .link {
    color: #20ad96
}

.icon-box .content .link {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 34px;
    padding: 5px 0;
    color: #8c89a2
}


    ;`
    export default Info;