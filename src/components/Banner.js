import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import blackSchool from "../assets/images/blackschool.jpg";

function Banner() {
	return (
		<Row id="hero-row">
			<Col id="hero-column">
				<Jumbotron id="hero-image">
					<img id="hero-school-image" src={blackSchool} alt="black logo" />
					<h5>Find waves with us, book a class now!</h5>
					<Button id="hero-button">Get Started</Button>
				</Jumbotron>
			</Col>
		</Row>
	);
}

export default Banner;
