import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import book from "../assets/images/bookCourse.jpg";
import find from "../assets/images/findCourse.jpg";
import ride from "../assets/images/rideWaves.jpg";

function Featured() {
	return (
		<Row>
			<Col>
				<CardDeck id="cardDeck">
					<Card className="myCards">
						<Card.Img variant="top" src={find} alt="surf boards images" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
						</Card.Body>
					</Card>
					<Card className="myCards">
						<Card.Img variant="top" src={book} alt="sufing lessons image" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
						</Card.Body>
					</Card>
					<Card className="myCards">
						<Card.Img variant="top" src={ride} alt="sufing image" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
						</Card.Body>
					</Card>
				</CardDeck>
			</Col>
		</Row>
	);
}

export default Featured;
