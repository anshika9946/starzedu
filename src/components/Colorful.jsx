import React from 'react'
import styled from "styled-components";


const Colorful = () => {
	let url="https://forms.gle/YmseSjCc16c4Q81UA";
  return (
    <Wrapper className="section">
    

   <div className="sec">
  <div className="title">
    <h2>CONTACT US</h2>
  </div>
  <div className="contact-form">
    <div className="input-fields">
      <input type="text" className="input" placeholder="Name"/>
      <input type="text" className="input" placeholder="Email Address"/>
      <input type="text" className="input" placeholder="Phone"/>
      {/* <input type="text" className="input" placeholder="Subject"/> */}
    </div>
    <div className="msg">
      <textarea placeholder="Message"></textarea>
      <div className="btn">send</div>
    </div>
  </div>
</div>

    </Wrapper>
    );
};

const Wrapper = styled.section`
@import url('https://fonts.googleapis.com/css?family=Roboto');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Roboto', sans-serif;
}

body{
  background: url('https://i.imgur.com/kk76J5I.jpg') no-repeat top center;
  background-size: cover;
  height: 100vh;
}
h2{
    color:white;
}
.sec{
    margin: 2rem auto;
    margin-bottom:4rem;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
  background: rgba(0,0,0,0.8);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

.sec .title h1{
  color: #c5ecfd;
  text-align: center;
  margin-bottom: 25px;
}

.contact-form{
  display: flex;
}

.input-fields{
  display: flex;
  flex-direction: column;
  margin-right: 4%;
}

.input-fields,
.msg{
  width: 48%;
}

.input-fields .input,
.msg textarea{
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid #c5ecfd;
  padding: 10px;
  color: #c5ecfd;
  width: 100%;
}

.msg textarea{
  height: 212px;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #c5ecfd;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #c5ecfd;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #c5ecfd;
}

.btn {
    background: #39b7dd;
    text-align: center;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
}

@media screen and (max-width: 600px){
  .contact-form{
    flex-direction: column;
  }
  .msg textarea{
    height: 80px;
  }
  .input-fields,
  .msg{
    width: 100%;
  }
}

`;

export default Colorful;