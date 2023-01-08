import React from 'react'
import styled from "styled-components";


const Design = () => {
	let url="https://forms.gle/uPSsUzfABdej7kZb7";
  return (
    <Wrapper className="section">
    

    <div className="container">
	<div className="card">
		<div className="card-image">	
			<h2 className="card-heading">
				{/* Get started
				<small>Let us create your account</small> */}
			</h2>
		</div>
		<form className="card-form">
			
			<div className="action">
			
				<button className="action-button" ><a href={url} className="a" target="_blank">CLICK TO BOOK A FREE SESSION</a></button>
				
			</div>
		</form>
		<div className="card-info">
			<p>Provide your kid with the best opportunities for a bright future!</p>
		</div>
	</div>
</div>


    </Wrapper>
    );
};

const Wrapper = styled.section`

margin-top:5rem;
*, *:after, *:before {
	box-sizing: border-box;
}
a:link, a:visited  {
	color: white;
	text-decoration: none;
	
  }
body {
	
	font-family: "DM Sans", sans-serif;
	line-height: 1.5;
	background-color: #f1f3fb;
	padding: 0 2rem;
}

img {
	max-width: 100%;
	display: block;
}


// iOS Reset 
input {
	appearance: none;
	border-radius: 0;
}

.card {
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 425px;
	background-color: #F4F4F4;
	border-radius: 10px;
	box-shadow: 0 10px 20px 0 rgba(#999, .25);
	padding: .75rem;
}

.card-image {
	border-radius: 8px;
	overflow: hidden;
	padding-bottom: 65%;
	background-image: url('images/ans.png');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	position: relative;
}

.card-heading {
	position: absolute;
	left: 10%;
	top: 15%;
	right: 10%;
	font-size: 3.75rem;
	font-weight: 700;
	color: #735400;
	line-height: 1.222;
	small {
		display: block;
		font-size: 1.75em;
		font-weight: 400;
		margin-top: .25em;
	}
}

.card-form {
	padding: 2rem 1rem 0;
}

.input {
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	padding-top: 1.5rem;
	&+.input {
		margin-top: 1.5rem;
	}
}

.input-label {
	color: #8597a3;
	position: absolute;
	top: 1.5rem;
	transition: .25s ease;
}

.input-field {
	border: 0;
	z-index: 1;
	background-color: transparent;
	border-bottom: 2px solid #eee; 
	font: inherit;
	font-size: 4.125rem;
	padding: .25rem 0;
	&:focus, &:valid {
		outline: 0;
		border-bottom-color: #6658d3;
		&+.input-label {
			color: #6658d3;
			transform: translateY(-1.5rem);
		}
	}
}

.action {
	margin-top: 2rem;
}

.action-button {
	font: inherit;
	font-size: 2.25rem;
	padding: 1em;
	width: 100%;
	font-weight: 500;
	background-color: #F79320;
	border-radius: 6px;
	color: white;
	border: 0;
	&:focus {
		outline: 0;
	}
}

.card-info {
	padding: 1rem 1rem;
	text-align: center;
	font-size: 2rem;
	color: #8597a3;
	margin-bottom:2rem;
	a {
		display: block;
		color: #6658d3;
		text-decoration: none;
	}
	p{
		font-size:2.15rem;
	}
}





`;

export default Design;