import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { validate } from "../helpers/validate";

export const useRegisterForm = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		mobileNumber: "",
		emailAddress: "",
		password: "",
		confirmPass: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

	const history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			console.log(values); // fetch post request here using values as body

			// check if email exists
			fetch(
				"https://backup-capstone-vscode.herokuapp.com/api/users/email-exists",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ emailAddress: values.emailAddress }),
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data.data);

					// user name is available register
					if (!data.data) {
						fetch(
							"https://backup-capstone-vscode.herokuapp.com/api/users/register",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									firstName: values.firstName,
									lastName: values.lastName,
									mobileNumber: values.mobileNumber,
									emailAddress: values.emailAddress,
									password: values.password,
								}),
							}
						)
							.then((res) => res.json())
							.then((data) => {
								console.log(data);
								alert("registration successful");
								history.push("/login");
							})
							.catch((err) => {
								console.log("registration failed.");
								alert("registration failed.");
							});
					} else {
						// if email is already in use, alert.
						alert("Email already in use, please choose a different email.");
						setIsSubmitting(false);
					}
				});
		}
	}, [errors, history, isSubmitting, values]);

	return { values, handleChange, errors, handleSubmit };
};
