import React from "react";
import styled from "styled-components";


const Contact = () => {
  const Wrapper = styled.section`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "PT Sans";
  background-color: #ddd;
  color: #333;
}

.section {
  position: relative;
  width: 900px;
  max-width: 80%;
  border: 2px solid #333;
  border-top: none;
  text-align: center;
  margin: 60px auto;
}

.section h1 {
  position: relative;
  margin-top: -14px;
  display: inline-block;
  letter-spacing: 4px;
}

.top-border{
  position: absolute;
  height: 2px;
  width: 24%;
  background-color: #333;
}

.right {
  right: 0;
}

.left {
  left: 0;
}

@media (max-width: 685px) {
.top-border {	
  width: 18%;
	}
}

.section p {
  width: 61%;
  margin: 20px auto 40px auto;
  line-height: 30px;
}

.section a {
  outline: 0;
  display: inline-block;
  padding: 20px;
  margin-bottom: 40px;
  width: 440px;
  max-width: 80%;
  background-color: #0056CD;
  color: #fff;
  font-size: 22px;
  letter-spacing: 3px;
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
}

// .section a:hover {
//   background-color: #1D222D;
// }

a:hover  {
  box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
  transform: scale(0.96);
}
.section a:link, .section a:visited, .section a:link:hover, .section a:visited:hover {
  text-decoration: none;
  color: #fff;
}

@media (max-width: 500px) {
  .top-border {	
    display: none;
  }
  .section {
  border-top: 2px solid #333;
  }
  .section h1 {
    margin: 20px 6px;
  }
}
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      {/* <h2 className="common-heading">Feel Free to Contact us</h2> */}

      <div className="section">
  <div className="top-border left"></div>
  <div className="top-border right"></div>
  <h1>CONTACT US</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <a href="https://forms.gle/YmseSjCc16c4Q81UA" target="_blank">CONTACT US</a>
</div>
    </Wrapper>
  );
};

export default Contact;
