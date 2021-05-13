export const validate = (values) => {
	let errors = {};

	if (Object.keys(values) !== 0) {
		if (!values.firstName) {
			errors.firstName = "Firstname is required!";
		}
		if (!values.lastName) {
			errors.lastName = "Lastname is required!";
		}
		if (!values.mobileNumber) {
			errors.mobileNumber = "Mobile number is required!";
		} else if (!/^\d{4}-\d{3}-\d{4}$/.test(values.mobileNumber)) {
			errors.mobileNumber = "Please follow 13-digit format!";
		}
		if (!values.emailAddress) {
			errors.emailAddress = "Email Address is required.";
		} else if (!/\S+@\S+\.\S/.test(values.emailAddress)) {
			errors.emailAddress = "Please enter a valid email address.";
		}
		if (!values.password) {
			errors.password = "Password is required!";
		} else if (values.password.length < 6) {
			errors.password = "Password must be at least 6 characters long!";
		}
		if (!values.confirmPass) {
			errors.confirmPass = "Need to confirm password!";
		} else if (values.password !== values.confirmPass) {
			errors.confirmPass = "Passwords do not match!";
		}
	}

	return errors;
};
