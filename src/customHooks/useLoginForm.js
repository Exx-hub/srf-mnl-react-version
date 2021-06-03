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
						localStorage.setItem("user", data.user);
						history.push("/profile");
						window.location.reload();
					} else {
						alert(data.message);
						setIsSubmitting(false);
					}
				});
		}
	}, [errors, history, isSubmitting, values.emailAddress, values.password]);

	return { values, handleChange, handleSubmit, errors };
};
