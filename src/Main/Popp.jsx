// import React, { useState, useEffect } from "react";
// import Popup from "reactjs-popup";
// import styled from "styled-components";

// export default function Popp(){
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     // Show the popup after 2 seconds
//     const timer = setTimeout(() => setShowPopup(true), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Wrapper>
//     <div>
//       {showPopup && (
//         <Popup
//           open={true}
//           closeOnDocumentClick={true}
//           onClose={() => setShowPopup(false)}
//         >
//           <p >This is my popup</p>
//         </Popup>
//       )}
//       {/* <div>My website content</div> */}
//     </div>
//     </Wrapper>
//   );
// }
// const Wrapper = styled.section`
// p{
//     background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   }
// `;


import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Popp = () =>{
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 1000);
  }, []);

  return (
<Wrapper>
      {showPopup && (
        <div className="popup">
          <div className="box">
            <div className="close" onClick={togglePopup}>
              &times;
            </div>
            <div className="content">Book A FREE DEMO Now!</div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.section`
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .box {
    background-color: #fff;
    border: 1px solid #000;
    padding: 20px;
    position: relative;
  }
  
  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 20px;
    cursor: pointer;
  }
  
  .content {
    margin-top: 20px;
  }
  
`;
export default Popp;
