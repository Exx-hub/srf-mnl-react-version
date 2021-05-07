import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import whiteRec from "../assets/images/whiteRec.png";

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="md" bg="light" variant="light">
			<Navbar.Brand href="#home">
				<img src={whiteRec} width="130" className="ml-1 p-2" alt="brand logo" />
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />

			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#home">HOME</Nav.Link>
					<Nav.Link href="#courses">COURSES</Nav.Link>
					<Nav.Link href="#profile">PROFILE</Nav.Link>
					<Nav.Link href="#register">REGISTER</Nav.Link>
					<Nav.Link href="#login">LOG IN</Nav.Link>
					<Nav.Link href="#logout">LOG OUT</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
