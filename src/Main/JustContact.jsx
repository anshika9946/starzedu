import React from 'react'
import styled from "styled-components";


const JustContact = () => {
	
  return (
    <Wrapper className="section">
    

    <div className="container">
  <div className='hello'>
    <h2>Contact Us</h2>
    <p>Phone: +91 8882073991 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Mail: support@starzedu.com</p>
  </div>
  <div className="row">
    <div className="column">
      <img src="images/ans1.png"  alt="contact Us image"/>
    </div>
    <div className="column">
      <form  action="https://formspree.io/f/xyyaywgy"
  method="POST">
        <label htmlFor="fname">Name</label>
        <input type="text" id="fname" name="name" placeholder="Your name.." required/>
        <br/>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="usa">Singapore</option>
          <option value="usa">Dubai</option>
          <option value="usa">Bangladesh</option>
          <option value="usa">India</option>
          <option value="usa">Others</option>
        </select>
        <br/>
        <label htmlFor="email">Email</label>
        <br/>
        <input type="email" name="email" className="input" placeholder="Email Address" required/>
        <br/>
        <label htmlFor="phone">Phone Number</label>
        <br/>
      <input type="tel" name="number" className="input" placeholder="Phone" required/>
<br/>
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
        <input type="submit" value="Submit" target="_blank" />
      </form>
    </div>
  </div>
</div>
    </Wrapper>
    );
};

const Wrapper = styled.section`

font-family:Microsoft Sans Serif;
margin-bottom:5rem;
margin-top:4rem;
* {
    box-sizing: border-box;
  }
  .hello{
    text-align:center;
  }
h2{
    margin-top:4rem;
}
p{
  font-size:2rem;
}
  img{
    width:100%;
  }
  #subject{
    height:170px;
  }
  /* Style inputs */
  input, select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    border-radius:.75rem;
  }

  input[type=submit] {
    background-color: rgb(247, 147, 32);
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: rgb(247, 135, 32);
  }
  
  /* Style the container/contact section */
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 10px;
  }
  
  /* Create two columns that float next to eachother */
  .column {
    float: left;
    width: 50%;
    margin-top: 6px;
    padding: 20px;
  }
  label{
    font-size:2rem;
  }
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
`;

export default JustContact;