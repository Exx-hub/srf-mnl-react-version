import React from "react";
import "./App.css";
import Home from "./pages/Home";

import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
	return (
		<div>
			<NavBar />
			<Container>
				<Row>
					<Col>
						<Home />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
