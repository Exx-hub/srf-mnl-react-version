import Button from "react-bootstrap/Button";
import React from "react";

function Login() {
	return (
		<div className="login">
			<h2>LOGIN</h2>
			<form className="loginForm">
				<input type="email" placeholder="Email Address" />
				<input type="password" placeholder="Password" />
				<Button>Sign In</Button>
				<a href="/register">Not yet registered? Sign up now!</a>
			</form>
		</div>
	);
}

export default Login;
