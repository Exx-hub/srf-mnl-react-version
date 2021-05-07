import React from "react";
import "./App.css";
import Home from "./pages/Home";

import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<NavBar />
			<Container fluid>
				<Row>
					<Col>
						<Home />
						{/* <Courses /> */}
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
