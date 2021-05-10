import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

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
			{courses.map((course, index) => {
				return <CourseCard key={index} course={course} />;
			})}
		</div>
	);
}

export default CourseCards;
