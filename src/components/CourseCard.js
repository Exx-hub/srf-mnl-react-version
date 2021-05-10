import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CourseCard({ course }) {
	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>{course.name}</Card.Title>
					<Card.Text>{course.description}</Card.Text>
				</Card.Body>
				<Button>View Course</Button>
			</Card>
		</>
	);
}

export default CourseCard;
