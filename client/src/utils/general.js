export const isEmptyObject = (obj) => {
	for (var i in obj) return false;
	return true;
};
