import React from 'react'
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Testimonials = () => {

  return (
    <Wrapper className="section">
    <div className='container'>
    <section>
  <h1>Our Services</h1>
  <p className="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <div className="services-grid">
    <div className="service service1">
    <svg xmlns="http://www.w3.org/2000/svg" className="features-icon" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
      <i className="ti-bar-chart"></i>
      <h4>Wealth Management</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      {/* <a href="#" className="cta">Read More <span className="ti-angle-right"/></a> */}
    </div>

    <div className="service service2">
    <svg xmlns="http://www.w3.org/2000/svg" className="features-icon" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
      <i className="ti-light-bulb"></i>
      <h4>Financial Planning</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      {/* <a href="#" className="cta">Read More <span className="ti-angle-right"/></a> */}
    </div>

    <div className="service service3">
    <svg xmlns="http://www.w3.org/2000/svg" className="features-icon" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
      <i className="ti-money"></i>
      <h4>Investment Banking</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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

  @import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans');

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

.features-icon {
  stroke:#425fca;                /*???*/
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  margin-top:1rem;
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
