import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Banner({ withButton, headerText, heroImage, bannerBg, cN, imgClass }) {
	return (
		<Row className="hero-row">
			<Col className="hero-column">
				<Jumbotron className={bannerBg}>
					<div className={cN}>
						<img className={imgClass} src={heroImage} alt="logo logo" />
						<h5>{headerText}</h5>
						{withButton ? (
							<Button className="hero-button">Get Started</Button>
						) : (
							""
						)}
					</div>
				</Jumbotron>
			</Col>
		</Row>
	);
}

export default Banner;
