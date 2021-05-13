export const validate = (values) => {
	let errors = {};

	if (Object.keys(values) !== 0) {
		if (!values.firstName) {
			errors.firstName = "Username is required!";
		}
	}

	return errors;
};
