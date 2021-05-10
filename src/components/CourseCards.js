import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function CourseCards() {
	const [courses, setCourses] = useState([]);
	console.log(courses);
	useEffect(() => {
		fetch("https://backup-capstone-vscode.herokuapp.com/api/courses")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCourses(data.courses);
			});
	}, []);

	return (
		<div>
			<h2>LIST OF ACTIVE COURSES</h2>
			<Row>
				{courses.map((course, index) => {
					return (
						<Col sm={12} md={4} lg={3} key={index}>
							<CourseCard course={course} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
}

export default CourseCards;
