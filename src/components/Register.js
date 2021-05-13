import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { validate } from "../helpers/validate";

function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(
			validate({
				firstName,
				lastName,
				mobileNumber,
				emailAddress,
				password,
				confirmPass,
			})
		);
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			console.log({
				firstName,
				lastName,
				mobileNumber,
				emailAddress,
				password,
			}); // mimics fetch post request to server

			setIsSubmitting(false);
			setFirstName("");
			setLastName("");
			setMobileNumber("");
			setEmailAddress("");
			setPassword("");
			setConfirmPass("");
		}
	}, [
		emailAddress,
		errors,
		firstName,
		isSubmitting,
		lastName,
		mobileNumber,
		password,
	]);

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
				{errors.firstName && <small>{errors.firstName}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="Lastname"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				{errors.lastName && <small>{errors.lastName}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="09XX-XXX-XXXX"
					value={mobileNumber}
					onChange={(e) => setMobileNumber(e.target.value)}
				/>
				{errors.mobileNumber && <small>{errors.mobileNumber}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="email"
					placeholder="Email Address"
					value={emailAddress}
					onChange={(e) => setEmailAddress(e.target.value)}
				/>
				{errors.emailAddress && <small>{errors.emailAddress}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="New Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{errors.password && <small>{errors.password}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="Confirm Password"
					value={confirmPass}
					onChange={(e) => setConfirmPass(e.target.value)}
				/>
				{errors.confirmPass && <small>{errors.confirmPass}</small>}
				<Button type="submit" className="my-3 siteButton">
					Sign Me Up
				</Button>
			</form>
		</div>
	);
}

export default Register;
