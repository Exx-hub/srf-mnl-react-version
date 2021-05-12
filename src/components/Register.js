import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({
			firstName,
			lastName,
			mobileNumber,
			emailAddress,
			password,
		});

		setFirstName("");
		setLastName("");
		setMobileNumber("");
		setEmailAddress("");
		setPassword("");
		setConfirmPass("");
	};
	return (
		<div className="register login col-md-5 mr-auto ml-auto">
			<h2 className="text-center mt-3">SIGN UP</h2>
			<form className="registerForm" onSubmit={handleSubmit}>
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="Firstname"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="Lastname"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="09XX-XXX-XXXX"
					value={mobileNumber}
					onChange={(e) => setMobileNumber(e.target.value)}
				/>
				<input
					className="my-2 p-2 siteInput"
					type="email"
					placeholder="Email Address"
					value={emailAddress}
					onChange={(e) => setEmailAddress(e.target.value)}
				/>
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="New Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="Confirm Password"
					value={confirmPass}
					onChange={(e) => setConfirmPass(e.target.value)}
				/>
				<Button type="submit" className="my-3 siteButton">
					Sign Me Up
				</Button>
			</form>
		</div>
	);
}

export default Register;
