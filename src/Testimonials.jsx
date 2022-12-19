import React from 'react'
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Testimonials = () => {
    const { services } = useGlobalContext();
    console.log(services);
  return (
    <Wrapper className="section">
    <div className='container'>
    <h2>What makes our Us special</h2>
      <div class="grid-3-cols">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="features-icon" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <p class="features-title"><strong>Science meets design</strong></p>
          <p class="features-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            similique adipisci praesentium.
          </p>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="features-icon" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="features-title">
            <strong>Maximal comfort</strong>
          </p>
          <p class="features-text">
            Reprehenderit optio placeat quasi excepturi architecto, explicabo
            facilis perspiciatis error maxime magnam.
          </p>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="features-icon" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p class="features-title">
            <strong>Ethical and sustainable</strong>
          </p>
          <p class="features-text">
            Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
            omnis est laudantium voluptatem voluptas!
          </p>
        </div>
      </div>

    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: white;

  .features-icon {
    stroke: #337EA8;                /*???*/
    width: 32px;
    height: 32px;
    margin-bottom: 24px;
  }
  
  .features-title {
    margin-bottom: 16px;
    font-size: 20px;
  }
  
  .features-text {
    font-size: 18px;
    line-height: 1.7;
  }
  

  
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
  .test {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
  }

.testimonial-section {
  background-color: #087f5b;
  padding: 24px;
  border-radius: 12px;
}

.testimonial-box {
  /* grid-column: 2 / -1; */
  /* grid-template-columns: repeat(2, 1fr); */
  align-self: center;
}

.testimonial-box h2 {
  margin-bottom: 24px;
  font-size: 24px;
  color: white;
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 1.7;
  color: #e6fcf5;
}

.testimonial-author {
  color: #c3fae8;
}
  `;

export default Testimonials;
