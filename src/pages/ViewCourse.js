import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SpinnerComponent from "../components/SpinnerComponent";
import Jumbotron from "react-bootstrap/Jumbotron";

function ViewCourse(props) {
	const { courseId } = props.match.params;

	const [course, setCourse] = useState(null);
	// console.log(course);

	// random image array

	useEffect(() => {
		fetch(
			`https://backup-capstone-vscode.herokuapp.com/api/courses?id=${courseId}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCourse(data.course);
			});
	}, [courseId]);

	return (
		<div>
			{course ? (
				<Jumbotron className="col-md-5 mr-auto ml-auto mt-4">
					{/* image  */}
					<h3>{course.name}</h3>
					<p>{course.description}</p>
					<p>₱ {course.price}</p>
					<Button className="btn-block siteButton">Enroll</Button>
				</Jumbotron>
			) : (
				<SpinnerComponent />
			)}
		</div>
	);
}

export default ViewCourse;
