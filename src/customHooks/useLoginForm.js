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

					if (data.data) {
						alert("successful login!");
						history.push("/profile");

						// do another fetch request using data.userId to get complete user details
						// then use that user details object to keep the user logged in.
						// fetch() here
						// after fetch save user details somewhere only then you prompt the
						// login successful and redirect to profile page.
					} else {
						alert(data.userDetails);
						setIsSubmitting(false);
					}
				});
		}
	}, [errors, history, isSubmitting, values.emailAddress, values.password]);

	return { values, handleChange, handleSubmit, errors };
};
