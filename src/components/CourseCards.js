import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SpinnerComponent from "./SpinnerComponent";

function CourseCards() {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("https://backup-capstone-vscode.herokuapp.com/api/courses")
			.then((res) => res.json())
			.then((data) => {
				setCourses(data.courses);
			});
	}, []);

	const courseList = courses.map((course, index) => {
		return (
			<Col sm={12} md={6} lg={6} key={index}>
				<CourseCard course={course} />
			</Col>
		);
	});

	return (
		<div>
			<Container>
				<h2 className="text-center coursesOffered my-3">Courses Offered: </h2>
				<Row>{courses.length !== 0 ? courseList : <SpinnerComponent />}</Row>
			</Container>
		</div>
	);
}

export default CourseCards;
