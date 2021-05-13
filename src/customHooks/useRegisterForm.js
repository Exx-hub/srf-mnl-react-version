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

	const submit = (e) => {
		e.preventDefault();

		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			console.log(values);
			alert("registration successful");
			history.push("/login");
		}
	}, [errors, history, isSubmitting, values]);

	return { values, handleChange, errors, submit };
};

//              firstName: values.firstName,
// 				lastName: values.lastName,
// 				mobileNumber: values.mobileNumber,
// 				emailAddress: values.emailAddress,
// 				password: values.password,
