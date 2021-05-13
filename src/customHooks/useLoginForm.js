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
			}); // fetch post request here using values as body

			// then if success --
			alert("successful login!");
			history.push("/profile");

			// if not --
			// ----
		}
	}, [errors, history, isSubmitting, values.emailAddress, values.password]);

	return { values, handleChange, handleSubmit, errors };
};
