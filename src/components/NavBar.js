import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">SRF MNL</Navbar.Brand>
			<Nav className="ml-auto">
				<Nav.Link href="#home">HOME</Nav.Link>
				<Nav.Link href="#courses">COURSES</Nav.Link>
				<Nav.Link href="#profile">PROFILE</Nav.Link>
				<Nav.Link href="#register">REGISTER</Nav.Link>
				<Nav.Link href="#login">LOG IN</Nav.Link>
				<Nav.Link href="#logout">LOG OUT</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default NavBar;
