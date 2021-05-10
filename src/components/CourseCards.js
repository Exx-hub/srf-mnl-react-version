import React from "react";
import CourseCard from "./CourseCard";

function CourseCards({ courses }) {
	return (
		<div>
			<h2>LIST OF ACTIVE COURSES</h2>
			{courses.courses?.map((course, index) => {
				return <CourseCard key={index} course={course} />;
			})}
		</div>
	);
}

export default CourseCards;
