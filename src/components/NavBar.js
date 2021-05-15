import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import whiteRec from "../assets/images/whiteRec.png";
import { useHistory } from "react-router";

function NavBar() {
	const history = useHistory();
	const path = history.location.pathname;
	return (
		<Navbar id="navbar" collapseOnSelect expand="lg">
			<Navbar.Brand href="/">
				<img
					src={whiteRec}
					width="130"
					className="ml-1 p-2 nav-logo"
					alt="brand logo"
				/>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />

			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link active={path === "/" && true} href="/">
						HOME
					</Nav.Link>
					<Nav.Link active={path === "/courses" && true} href="/courses">
						COURSES
					</Nav.Link>
					<Nav.Link active={path === "/profile" && true} href="/profile">
						PROFILE
					</Nav.Link>
					<Nav.Link active={path === "/register" && true} href="/register">
						REGISTER
					</Nav.Link>
					<Nav.Link active={path === "/login" && true} href="/login">
						LOG IN
					</Nav.Link>
					{/* <Nav.Link href="#logout">LOG OUT</Nav.Link> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
