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
                    <div className="icon"> <img src="https://i.imgur.com/CBU1h2t.png" width="240"/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Virtual Classroom</h3>
                        <div className="desc">
                            <p>Students login to the virtual classroom to complete their lessons. Teachers create the lessons ahead of time, so the students can work on the lessons at their own pace. </p>
                        </div>
                    </div>
                </div>
        </div>
        <div className="col-md-4">
            <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up"> 
                    <div className="icon"> <img src="https://i.imgur.com/Ckggrwe.png" width="220" alt=""/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Instruction & Assessment</h3>
                        <div className="desc">
                            <p>The lessons include the instructional component that teaches the students what they need to know, and the assessment component which aids in the learning process and tests the student's comprehension.</p>
                        </div>
                    </div>
              </div>
        </div>
        <div className="col-md-4">
            <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up"> 
                    <div className="icon"> <img src="https://i.imgur.com/IUlCVE2.png" width="220" alt=""/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Fully Teacher Supported</h3>
                        <div className="desc">
                            <p>Students have a dedicated Ontario certified teacher to help with lessons and give feedback on open-ended assignments like creative writing. Teachers provide weekly optional video conference check-ins that all students in the class can attend together. Class sizes are kept small so students can get the attention they need. If students need assistance with a lesson, they email their teacher who can do one-on-one video conferencing and whiteboarding. Customized learning plans are created for students who are ahead or behind in certain subjects.</p>
                        </div>
                    </div>
               </div>
        </div>
        <div className="col-md-4">
            <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up"> 
                    <div className="icon"> <img src="https://i.imgur.com/Ckggrwe.png" width="220" alt=""/> </div>
                    <div className="content">
                        <h3 className="title fz-20">Tuition</h3>
                        <div className="desc">
                            <p>The tuition covers the regular school year. The school year for students starts the Wednesday after Labour Day weekend and goes until the end of June. For vacation time, we follow a similar for calendar as the rest of the schools in Ontario. There are no extra books or fees required.</p>
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
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
    padding: 9rem 0;
    box-sizing: border-box;
    justify-content: center;
    
  
  
  
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
    border-radius: 5px;
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
    font-size: 24px;
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
    font-size: 14px;
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