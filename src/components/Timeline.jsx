import React from 'react'
import styled from "styled-components";


const Timeline = () => {
	
  return (
    <Wrapper className="section">
    
  
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



<div className="">
  <div className="container">
    <h2 className="pb-3 pt-2 border-bottom mb-5">Vertical Left-Right Timeline</h2>
    
    <div className="row align-items-center how-it-works d-flex">
      <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">1</div>
      </div>
      <div className="col-6">
        <h5 id="milestone_1_date">Fully Responsive</h5>
        <p id="milestone_1_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
  
    <div className="row timeline">
      <div className="col-2">
        <div className="corner top-right"></div>
      </div>
      <div className="col-8">
        <hr/>
      </div>
      <div className="col-2">
        <div className="corner left-bottom"></div>
      </div>
    </div>
   
    <div className="row align-items-center justify-content-end how-it-works d-flex">
      <div className="col-6 text-right">
        <h5 id="milestone_2_date">Using Bootstrap</h5>
        <p id="milestone_2_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
      <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">2</div>
      </div>
    </div>
 
    <div className="row timeline">
      <div className="col-2">
        <div className="corner right-bottom"></div>
      </div>
      <div className="col-8">
        <hr/>
      </div>
      <div className="col-2">
        <div className="corner top-left"></div>
      </div>
    </div>
  
    <div className="row align-items-center how-it-works d-flex">
      <div className="col-2 text-center more d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">3</div>
      </div>
      <div className="col-6">
        <h5 id="milestone_3_date">Now with Pug and Sass</h5>
        <p id="milestone_3_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
		 <div className="row timeline">
      <div className="col-2">
        <div className="corner top-right"></div>
      </div>
      <div className="col-8">
        <hr/>
      </div>
      <div className="col-2">
        <div className="corner left-bottom"></div>
      </div>
    </div>
  
	<div className="row align-items-center justify-content-end how-it-works d-flex">
      <div className="col-6 text-right">
        <h5 id="milestone_4_date">Using Bootstrap</h5>
        <p id="milestone_4_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
      <div className="col-2 text-center morethan d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">4</div>
      </div>
    </div>
</div>
	</div>
    </Wrapper>
    );
};

const Wrapper = styled.section`
margin-bottom:4rem;

.circle {
    padding: 40px 40px;
    border-radius: 50%;
    background-color: var(--primary);
    color: #ffbf00;
    max-height: 50px;
    z-index: 2;
  }
  
  .how-it-works.row .col-2 {
    align-self: stretch;
  }
  .how-it-works.row .col-2::after {
    content: "";
    position: absolute;
    border-left: 3px solid var(--primary);
    z-index: 1;
  }
  .how-it-works.row .col-2.bottom::after {
    height: 50%;
    left: 50%;
    top: 50%;
  }
  .how-it-works.row .col-2.full::after {
    height: 100%;
    left: calc(50% - 3px);
  }
  .how-it-works.row .col-2.more::after {
    height: 100%;
    left: calc(50% - 0px);
  }
  .how-it-works.row .col-2.top::after {
    height: 50%;
    left: 50%;
    top: 0;
  }
  .how-it-works.row .col-2.morethan::after {
    height: 50%;
    left: calc(50% - 3px);
    top: 0;
  }
  
  
  .timeline div {
    padding: 0;
    height: 40px;
  }
  .timeline hr {
    border-top: 3px solid var(--primary);
    margin: 0;
    top: 17px;
    position: relative;
  }
  .timeline .col-2 {
    display: flex;
    overflow: hidden;
  }
  .timeline .corner {
    border: 3px solid var(--primary);
    width: 100%;
    position: relative;
    border-radius: 15px;
  }
  .timeline .top-right {
    left: 50%;
    top: -50%;
  }
  .timeline .left-bottom {
    left: -50%;
    top: calc(50% - 3px);
  }
  .timeline .top-left {
    left: -50%;
    top: -50%;
  }
  .timeline .right-bottom {
    left: 50%;
    top: calc(50% - 3px);
  }
  
`;

export default Timeline ;