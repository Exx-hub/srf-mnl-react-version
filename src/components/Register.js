import React from "react";
import Button from "react-bootstrap/Button";

function Register() {
	return (
		<div className="login">
			<h2>SIGN UP</h2>
			<form className="loginForm">
				<input type="text" placeholder="Firstname" />
				<input type="text" placeholder="Lastname" />
				<input type="number" placeholder="09XX-XXX-XXXX" />
				<input type="email" placeholder="Email Address" />
				<input type="password" placeholder="New Password" />
				<input type="password" placeholder="Confirm Password" />
				<Button>Sign Me Up</Button>
			</form>
		</div>
	);
}

export default Register;
