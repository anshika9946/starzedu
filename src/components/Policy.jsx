import React from "react";
import styled from "styled-components";


const Policy = () => {
    return (
        <Wrapper>
            <div className="section">
        
        <h2>
        Privacy Policy
        </h2>
        
        <p>
        Your privacy is critical to us. Likewise, we have built up this Policy
        with the end goal you should see how we gather, utilize, impart and
        reveal and make utilization of individual data. The following
        blueprints our privacy policy.
        </p>
        
        <ul>
        <li>
        Before or at the time of collecting personal information, we will
        identify the purposes for which information is being collected.
        </li>
        <li>
        We will gather and utilization of individual data singularly with the
        target of satisfying those reasons indicated by us and for other good
        purposes, unless we get the assent of the individual concerned or as
        required by law.
        </li>
        <li>
        We will just hold individual data the length of essential for the
        satisfaction of those reasons.
        </li>
        <li>
        We will gather individual data by legal and reasonable means and,
        where fitting, with the information or assent of the individual
        concerned.
        </li>
        <li>
        Personal information ought to be important to the reasons for which it
        is to be utilized, and, to the degree essential for those reasons,
        ought to be exact, finished, and updated.
        </li>
        <li>
        We will protect individual data by security shields against misfortune
        or burglary, and also unapproved access, divulgence, duplicating, use
        or alteration.
        </li>
        <li>
        We will promptly provide customers with access to our policies and
        procedures for the administration of individual data.
        </li>
        </ul>
        
        <p>
        We are focused on leading our business as per these standards with a
        specific end goal to guarantee that the privacy of individual data is
        secure and maintained.
        </p>
        </div>
        </Wrapper>
        );
    };
    const Wrapper = styled.section`

    font-family:Microsoft Sans Serif;
  * {
  box-sizing: border-box;
  margin: 2rem;
  padding: 0;
  font-size:2rem;
}
h2{
   font-size: 3rem;
   font-weight:bold;
}
body {
  font-family:Microsoft Sans Serif;
  background-color: #ddd;
  color: #333;
}

.section {
  position: relative;
  width: 900px;
  max-width: 80%;
  border: 2px solid #333;
  text-align: left;
  margin: 60px auto;
}
  `;
    
    export default Policy;