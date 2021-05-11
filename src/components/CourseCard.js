import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

function CourseCard({ course }) {
	const history = useHistory();
	return (
		<>
			<Card className="my-4 courseCards">
				<Card.Body>
					<Card.Title>{course.name}</Card.Title>
					<Card.Text>{course.description}</Card.Text>
					<Card.Text className="text-right">₱ {course.price}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button
						onClick={() => history.push(`/courses/${course._id}`)}
						className="col-sm-12 col-md-4 mb-1"
						id="viewButton"
					>
						View
					</Button>
				</Card.Footer>
			</Card>
		</>
	);
}

export default CourseCard;
