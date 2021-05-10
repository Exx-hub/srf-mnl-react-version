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
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Container id="try" fluid>
					<Row>
						<Col>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/courses" component={Courses} />
								<Route path="/profile" component={Profile} />
								<Route path="/register" component={Register} />
								<Route path="/login" component={Login} />
							</Switch>
						</Col>
					</Row>
				</Container>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
