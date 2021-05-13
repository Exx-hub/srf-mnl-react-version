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

			// then if success --
			alert("registration successful");
			history.push("/login");

			// if not
			// ----
		}
	}, [errors, history, isSubmitting, values]);

	return { values, handleChange, errors, handleSubmit };
};

//              firstName: values.firstName,
// 				lastName: values.lastName,
// 				mobileNumber: values.mobileNumber,
// 				emailAddress: values.emailAddress,
// 				password: values.password,
