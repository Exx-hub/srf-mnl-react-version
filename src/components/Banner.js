import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Banner() {
	return (
		<Row>
			<Col>
				<Jumbotron id="hero-image">
					<h1 className="title">Course Booking System</h1>
					<p>booking for everyone, everywhere!</p>
					<Button variant="success">Get Started</Button>
				</Jumbotron>
			</Col>
		</Row>
	);
}

export default Banner;
