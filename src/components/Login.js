import Button from "react-bootstrap/Button";
import React from "react";

function Login() {
	return (
		<div className="login col-md-5 mr-auto ml-auto">
			<h2 className="text-center mt-3">LOGIN</h2>
			<form className="loginForm mt-3">
				<input
					className="my-2 p-2 siteInput"
					type="email"
					placeholder="Email Address"
				/>
				<input
					className="my-2 p-2 siteInput"
					type="password"
					placeholder="Password"
				/>
				<Button className="my-3 siteButton">Sign In</Button>
				<a href="/register" className="text-center">
					Not yet registered? Sign up now!
				</a>
			</form>
		</div>
	);
}

export default Login;
