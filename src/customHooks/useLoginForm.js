import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { loginValidate } from "../helpers/loginValidate";

export const useLoginform = () => {
	const [values, setValues] = useState({ emailAddress: "", password: "" });

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

	const history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(loginValidate(values));
		setIsSubmitting(true);
	};

	const getUserDetails = (token) => {
		console.log(`i am the token: ${token}`);

		fetch(`https://backup-capstone-vscode.herokuapp.com/api/users/details/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				// then do something with the user data here
			});
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			console.log({
				emailAddress: values.emailAddress,
				password: values.password,
			});
			fetch("https://backup-capstone-vscode.herokuapp.com/api/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					emailAddress: values.emailAddress,
					password: values.password,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);

					if (data.token) {
						alert(data.message);

						localStorage.setItem("token", data.token); // save token to localstorate

						getUserDetails(localStorage.getItem("token"));
						// this function should be in the profile section

						history.push("/profile");
					} else {
						alert(data.message);
						setIsSubmitting(false);
					}
				});
		}
	}, [errors, history, isSubmitting, values.emailAddress, values.password]);

	return { values, handleChange, handleSubmit, errors };
};
