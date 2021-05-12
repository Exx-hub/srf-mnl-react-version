import React from "react";
import Banner from "../components/Banner";

import whiteSchool from "../assets/images/whiteSchool.jpg";
import CourseCards from "../components/CourseCards";
import Footer from "../components/Footer";

function Courses() {
	return (
		<>
			<Banner
				heroImage={whiteSchool}
				bannerBg="courses-hero-image"
				cN="hero-text-courses"
				imgClass="hero-school-course-image"
			/>
			<CourseCards />
			<Footer sticky />
		</>
	);
}

export default Courses;
