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
						<Card.Img src={find} alt="surf boards images" />
						<Card.ImgOverlay>
							<Card.Title className="cardTitle">Find A Course</Card.Title>
						</Card.ImgOverlay>
					</Card>

					<Card className="myCards">
						<Card.Img src={book} alt="sufing lessons image" />
						<Card.ImgOverlay>
							<Card.Title className="cardTitle">Book The Course</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card className="myCards">
						<Card.Img src={ride} alt="sufing image" />
						<Card.ImgOverlay>
							<Card.Title className="cardTitle">Ride The Waves</Card.Title>
						</Card.ImgOverlay>
					</Card>
				</CardDeck>
			</Col>
		</Row>
	);
}

export default Featured;
