export const isObjEmpty = (object: any) => {
	for (let obj in object) {
		return false;
	}
	return true;
};
