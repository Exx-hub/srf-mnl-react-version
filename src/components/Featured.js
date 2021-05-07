import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function Featured() {
	return (
		<Row>
			<Col>
				<CardDeck>
					<Card>
						<Card.Img variant="top" src="" alt="image 1" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								This is a wider card supporting text below as a natural lead-in
								to additional content. This is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src="" alt="image 1" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								This is a wider card supporting text below as a natural lead-in
								to additional content. This is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src="" alt="image 1" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								This is a wider card supporting text below as a natural lead-in
								to additional content. This is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
				</CardDeck>
			</Col>
		</Row>
	);
}

export default Featured;
