import React from "react";
import styled from "styled-components";


const Terms = () => {
    return (
        <Wrapper>
            <div className="section">
        <h2>
        Web Site Terms and Conditions of Use
        </h2>
        
        <h3>
        1. Terms
        </h3>
        
        <p>
        By accessing this web site, you are agreeing to be bound by these web
        site Terms and Conditions of Use, applicable laws and regulations and
        their compliance. If you disagree with any of the stated terms and
        conditions, you are prohibited from using or accessing this site. The
        materials contained in this site are secured by relevant copyright and
        trade mark law.
        </p>
        
        <h3>
        2. Use License
        </h3>
        
        <ol type="a">
        <li>
        Permission is allowed to temporarily download one duplicate of the
        materials (data or programming) on Starzedu's site for individual and
        non-business use only. This is the just a permit of license and not an
        exchange of title, and under this permit you may not:
        <ol type="i">
        <li>modify or copy the materials;</li>
        <li>use the materials for any commercial use , or for any public
        presentation (business or non-business); </li>
        <li>attempt to decompile or rebuild any product or material contained
        on Starzedu's site;</li>
        <li>remove any copyright or other restrictive documentations from the
        materials; or</li>
        <li>transfer the materials to someone else or even "mirror" the
        materials on other server.</li>
        </ol>
        </li>
        <li>
        This permit might consequently be terminated if you disregard any of
        these confinements and may be ended by Starzedu whenever deemed. After
        permit termination or when your viewing permit is terminated, you must
        destroy any downloaded materials in your ownership whether in
        electronic or printed form.
        </li>
        </ol>
        
        <h3>
        3. Disclaimer
        </h3>
        
        <ol type="a">
        <li>
        The materials on Starzedu's site are given "as is". Starzedu makes no
        guarantees, communicated or suggested, and thus renounces and
        nullifies every single other warranties, including without impediment,
        inferred guarantees or states of merchantability, fitness for a
        specific reason, or non-encroachment of licensed property or other
        infringement of rights. Further, Starzedu does not warrant or make any
        representations concerning the precision, likely results, or
        unwavering quality of the utilization of the materials on its Internet
        site or generally identifying with such materials or on any
        destinations connected to this website.
        </li>
        </ol>
        
        <h3>
        4. Constraints
        </h3>
        
        <p>
        In no occasion should Starzedu or its suppliers subject for any harms
        (counting, without constraint, harms for loss of information or
        benefit, or because of business interference,) emerging out of the
        utilization or powerlessness to utilize the materials on Starzedu's
        Internet webpage, regardless of the possibility that Starzedu or a
        Starzedu approved agent has been told orally or in written of the
        likelihood of such harm. Since a few purviews don't permit constraints
        on inferred guarantees, or impediments of obligation for weighty or
        coincidental harms, these confinements may not make a difference to
        you.
        </p>
        
        <h3>
        5. Amendments and Errata
        </h3>
        
        <p>
        The materials showing up on Starzedu's site could incorporate
        typographical, or photographic mistakes. Starzedu does not warrant
        that any of the materials on its site are exact, finished, or current.
        Starzedu may roll out improvements to the materials contained on its
        site whenever without notification. Starzedu does not, then again,
        make any dedication to update the materials.
        </p>
        
        <h3>
        6. Links
        </h3>
        
        <p>
        Starzedu has not checked on the majority of the websites or links
        connected to its website and is not in charge of the substance of any
        such connected webpage. The incorporation of any connection does not
        infer support by Starzedu of the site. Utilization of any such
        connected site is at the user's own risk.
        </p>
        
        <h3>
        7. Site Terms of Use Modifications
        </h3>
        
        <p>
        Starzedu may update these terms of utilization for its website
        whenever without notification. By utilizing this site you are
        consenting to be bound by the then current form of these Terms and
        Conditions of Use.
        </p>
        
        <h3>
        8. Governing Law
        </h3>
        
        <p>
        Any case identifying with Starzedu's site should be administered by
        the laws of the country of India Starzedu State without respect to its
        contention of law provisions.
        </p>
        
        <p>
        General Terms and Conditions applicable to Use of a Web Site.
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
    
    export default Terms;