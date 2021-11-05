export const addToCartFunctionality = (cartData: any, payload: any) => {
	if (cartData[payload.id]) {
		if (cartData[payload.id].quantity < 5) {
			cartData[payload.id].quantity += 1;
		}
		return { cartData: { ...cartData } };
	} else {
		cartData[payload.id] = { ...payload, quantity: 1 };
		return { cartData: { ...cartData } };
	}
};

export const removeFromCartFunctionality = (cartData: any, payload: any) => {
	if (cartData[payload.id] && cartData[payload.id].quantity > 1) {
		cartData[payload.id].quantity -= 1;
		return { cartData: { ...cartData } };
	} else {
		delete cartData[payload.id];
		return { cartData: { ...cartData } };
	}
};

export const deleteFromCartFunctionality = (cartData: any, payload: any) => {
	delete cartData[payload.id];
	return { cartData: { ...cartData } };
};
