import React from "react";
import Button from "react-bootstrap/Button";

function Register() {
	return (
		<div className="register login col-md-5 mr-auto ml-auto">
			<h2 className="text-center mt-3">SIGN UP</h2>
			<form className="registerForm">
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="Firstname"
				/>
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="Lastname"
				/>
				<input
					className="my-2 p-2 siteInput"
					type="number"
					placeholder="09XX-XXX-XXXX"
				/>
				<input
					className="my-2 p-2 siteInput"
					type="email"
					placeholder="Email Address"
				/>
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="New Password"
				/>
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="Confirm Password"
				/>
				<Button className="my-3 siteButton">Sign Me Up</Button>
			</form>
		</div>
	);
}

export default Register;
