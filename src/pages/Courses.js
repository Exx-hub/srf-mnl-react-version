import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";

import blackSchool from "../assets/images/blackschool.jpg";
import CourseCard from "../components/CourseCard";
import CourseCards from "../components/CourseCards";

function Courses() {
	const [courses, setCourses] = useState([]);
	console.log(courses);
	useEffect(() => {
		fetch("https://backup-capstone-vscode.herokuapp.com/api/courses")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCourses(data);
			});
	}, []);
	return (
		<>
			<Banner
				heroImage={blackSchool}
				bannerBg="courses-hero-image"
				cN="hero-text-courses"
				imgClass="hero-school-course-image"
			/>
			<CourseCards courses={courses} />;
		</>
	);
}

export default Courses;
