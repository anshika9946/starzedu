import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <div className="container">
      <h2>Our Services</h2>
      <div className="grid-3-cols">
        <figure className="chair">
          <img src="./images/chair-1.jpg" alt="Chair" />
          <div className="chair-box">
            <h3>The Laid Back</h3>
            <ul className="chair-details">
              <li>
                <svg xmlns="./images/hero.png" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
               
                <span>Leisure and relaxing</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Comfortable for 4h</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Vegan leather</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Weighs 16 kg</span>
              </li>
            </ul>
            <div className="chair-price">
              <strong>250€</strong>
              <a href="#" className="btn btn--small">Add to cart</a>
            </div>
          </div>
        </figure>

        <figure className="chair">
          <img src="./images/chair-2.jpg" alt="Chair" />
          <div className="chair-box">
            <h3>The Worker Bee</h3>
            <ul className="chair-details">
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Work</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Comfortable for 8h</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Vegan leather</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Weighs 22 kg</span>
              </li>
            </ul>
            <div className="chair-price">
              <strong>525€</strong>
              <a href="#" className="btn btn--small">Add to cart</a>
            </div>
          </div>
        </figure>

        <figure className="chair">
          <img src="./images/chair-3.jpg" alt="Chair" />
          <div className="chair-box">
            <h3>The Chair 4/2</h3>
            <ul className="chair-details">
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Leisure and relaxing</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Comfortable all day!</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Organic cotton</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="chair-icon" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Weighs 80 kg</span>
              </li>
            </ul>
            <div className="chair-price">
              <strong>1450€</strong>
              <a href="#" className="btn btn--small">Add to cart</a>
            </div>
          </div>
        </figure>
      </div>
      </div>
      {/* <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, name, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  h2 {
    margin-bottom: 48px;
    font-size: 36px;
    letter-spacing: -0.5px;
  }

img {
  border-radius: 12px;
  width: 100%;
    
}
  .container {
    max-width: 120rem;
    width: 950px;
    margin:auto;
  }
  .section {
    margin-bottom: 96px;
  }
  .grid-3-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 80px;
  }
  

  .chair {
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.07);
    border-radius: 12px;
  }
  
  .chair img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  
  h3 {
    margin-bottom: 24px;
    font-size: 20px;
  }
  
  
  .chair-details {
    list-style: none;
    margin-bottom: 48px;
  }
  
  .chair-details li {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  
  /* .chair-details li:last-child {
    margin-bottom: 0;
  } */
  
  .chair-icon {
    stroke: #337EA8;
    width: 24px;
    height: 24px;
  }
  
  .chair-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  } 
  
  .chair-box {
      padding: 32px;
    }
  
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }


`;

export default Services;
