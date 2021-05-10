import React from "react";

function CourseCard({ course }) {
	return (
		<>
			<h3>{course.name}</h3>
			<p>{course.description}</p>
		</>
	);
}

export default CourseCard;
