import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";

import blackSchool from "../assets/images/blackschool.jpg";
import CourseCards from "../components/CourseCards";

function Courses() {
	return (
		<>
			<Banner
				heroImage={blackSchool}
				bannerBg="courses-hero-image"
				cN="hero-text-courses"
				imgClass="hero-school-course-image"
			/>
			<CourseCards />;
		</>
	);
}

export default Courses;
