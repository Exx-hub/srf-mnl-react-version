import React from "react";
import Button from "react-bootstrap/Button";
import { useLoginform } from "../customHooks/useLoginForm";

function Login() {
	const { values, handleChange, handleSubmit, errors } = useLoginform();

	return (
		<div className="login col-md-5 mr-auto ml-auto">
			<h2 className="text-center mt-3">LOGIN</h2>
			<form className="loginForm mt-3" onSubmit={handleSubmit}>
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
					placeholder="Password"
					name="password"
					value={values.password}
					onChange={handleChange}
				/>
				{errors.password && <small>{errors.password}</small>}
				<Button type="submit" className="my-3 siteButton">
					Sign In
				</Button>
				<a href="/register" className="text-center">
					Not yet registered? Sign up now!
				</a>
			</form>
		</div>
	);
}

export default Login;
