import React from 'react'
import styled from "styled-components";

const Testimonials = () => {

  return (
    <Wrapper className="section">
    <div className='container'>
    <section>
  <h1>Our Services</h1>
  <p className="section-lead">The guaranteed formula to be a Study wizard</p>
  <div className="services-grid">
    <div className="service service1">
    <img src="images/test1.svg" alt="hero image" className="hero-img" />
      <i className="ti-bar-chart"></i>
      <h4>Adaptive learning</h4>
      <p>Children can choose a topic and work at their own pace</p>
      {/* <a href="#" className="cta">Read More <span className="ti-angle-right"/></a> */}
    </div>

    <div className="service service2">
    <img src="images/test2.svg" alt="hero image" className="hero-img" />
      <i className="ti-light-bulb"></i>
      <h4>Interactive classes</h4>
      <p>A combination of group and individualised exercises</p>
      {/* <a href="#" className="cta">Read More <span className="ti-angle-right"/></a> */}
    </div>

    <div className="service service3">
           <img src="images/test3.svg" alt="hero image" className="hero-img" />
      <i className="ti-money"></i>
      <h4>Expert teachers</h4>
      <p>A personal tutor with you, every step of the way</p>
      {/* <a href="#" className="cta">Read more <span className="ti-angle-right"></span></a> */}
    </div>
  </div>
</section>

    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: white;
  margin-bottom:0px;

  @import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans');

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

// .features-icon {
//   stroke:#425fca;                /*???*/
//   width: 4rem;
//   height: 4rem;
//   margin-bottom: 1rem;
//   margin-top:1rem;
// }
img{
  object-fit: contain;
  width: 63px;
  height: 63px;
  margin:0 78px


}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  background: #fff;
  color: #999;
}

// a {
//   text-decoration: none;
//   margin: 1rem 0;
//   font-weight: 600;
//   text-transform: uppercase;
//   font-size: 1.8125rem;
//   letter-spacing: 1px;
// }

p {
  font-size: 1.5rem;
  margin: 2rem 1rem;
  line-height: 2;
}

section {

  text-align: center;

}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333;
  font-size: 3em;.525r
  margin: 3.3rem 0;


}

.section-lead {
  max-width: 600px;
  margin: 1rem auto 1.5rem;
}

.service a {
  color: #56ceba;
  display: block;
}

.service h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #56ceba;
  font-size: 2rem;
  margin: 1rem 0 0.6rem;
}

.services-grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.service {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #e7e7e7;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.service:hover {
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
}

.service i {
  font-size: 3.45rem;
  margin: 1rem 0;
}

.service1 i,
.service1 h4,
.service1 .cta {
  color: #42b7ca;
}

.service1:hover {
  border: 2px solid #42b7ca;
}

.service2 i,
.service2 h4,
.service2 .cta {
  color: #425fca;
}

.service2:hover {
  border: 2px solid #425fca;
}

.service3 i,
.service3 h4,
.service3 .cta {
  color: #9c42ca;
}

.service3:hover {
  border: 2px solid #9c42ca;
}

.service .cta span {
  font-size: 3.6rem;
}

.service > * {
  flex: 1 1 100%;
}

.service .cta {
  align-self: flex-end;
}

@media all and (max-width:900px) {
  .services-grid {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}
  `;

export default Testimonials;
