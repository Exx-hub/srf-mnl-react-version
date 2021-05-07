import React from "react";
import Banner from "../components/Banner";

import blackSchool from "../assets/images/blackschool.jpg";

function Courses() {
	return (
		<>
			<Banner
				heroImage={blackSchool}
				bannerBg="courses-hero-image"
				cN="hero-text-courses"
				imgClass="hero-school-course-image"
			/>
		</>
	);
}

export default Courses;
