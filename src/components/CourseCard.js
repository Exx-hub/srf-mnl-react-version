import React from "react";

function CourseCard({ course }) {
	return (
		<>
			<h4>{course.name}</h4>
			<p>{course.description}</p>
		</>
	);
}

export default CourseCard;
