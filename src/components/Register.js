import React from "react";
import Button from "react-bootstrap/Button";
import { useRegisterForm } from "../customHooks/useRegisterForm";

function Register() {
	const { handleChange, handleSubmit, values, errors } = useRegisterForm(); // custom hook to handle form data

	return (
		<div className="register login col-md-5 mr-auto ml-auto">
			<h2 className="text-center mt-3">SIGN UP</h2>
			<form className="registerForm" onSubmit={handleSubmit}>
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="Firstname"
					name="firstName"
					value={values.firstName}
					onChange={handleChange}
				/>
				{errors.firstName && <small>{errors.firstName}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="Lastname"
					name="lastName"
					value={values.lastName}
					onChange={handleChange}
				/>
				{errors.lastName && <small>{errors.lastName}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="text"
					placeholder="09XX-XXX-XXXX"
					name="mobileNumber"
					value={values.mobileNumber}
					onChange={handleChange}
				/>
				{errors.mobileNumber && <small>{errors.mobileNumber}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="email"
					placeholder="Email Address"
					name="emailAddress"
					value={values.emailAddress}
					onChange={handleChange}
				/>
				{errors.emailAddress && <small>{errors.emailAddress}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="New Password"
					name="password"
					value={values.password}
					onChange={handleChange}
				/>
				{errors.password && <small>{errors.password}</small>}
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="Confirm Password"
					name="confirmPass"
					value={values.confirmPass}
					onChange={handleChange}
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
