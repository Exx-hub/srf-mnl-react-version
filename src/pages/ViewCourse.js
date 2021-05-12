import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import SpinnerComponent from "../components/SpinnerComponent";
import Jumbotron from "react-bootstrap/Jumbotron";

import logo from "../assets/images/logo1.png";

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
				<Jumbotron className="col-md-5 mr-auto ml-auto mt-4 p-4">
					<img className="logo" src={logo} alt="circle logo" />
					<h3 className="mt-4">{course.name}</h3>
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
