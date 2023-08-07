export const isEmptyObject = (obj) => {
	for (var i in obj) return false;
	return true;
};

export const hasErrors = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i].errors.length > 0) return true;
	}
	return false;
};

export const errorsObjToArr = (obj) => {
	const errors = [];

	for (const [key, value] of Object.entries(obj)) {
		errors.push({ errors: [value], name: key });
	}

	return errors;
};
