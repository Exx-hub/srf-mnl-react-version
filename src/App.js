import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Container fluid>
						<Row>
							<Col>
								<Route exact path="/" component={Home} />
								<Route path="/courses" component={Courses} />
							</Col>
						</Row>
					</Container>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
