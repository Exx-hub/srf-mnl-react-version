import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CourseCard({ course }) {
	return (
		<>
			<Card className="my-5 courseCards">
				<Card.Body>
					<Card.Title>{course.name}</Card.Title>
					<Card.Text>{course.description}</Card.Text>
					<Card.Text className="text-right">₱ {course.price}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button className="col-sm-12 col-md-4 mb-1" id="viewButton">
						View
					</Button>
				</Card.Footer>
			</Card>
		</>
	);
}

export default CourseCard;
