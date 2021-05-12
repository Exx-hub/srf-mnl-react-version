import React from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";

import blackSchool from "../assets/images/blackschool.jpg";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<Banner
				headerText="Find waves with us, book a class now!"
				heroImage={blackSchool}
				bannerBg="home-hero-image"
				cN="hero-text-home"
				imgClass="hero-school-home-image"
			/>
			<Featured />
			<Footer />
		</>
	);
}

export default Home;
