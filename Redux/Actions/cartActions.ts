import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
	DELETE_FROM_CART,
} from "./../constants";

export const addToCart = (payload: any) => {
	return {
		type: ADD_TO_CART,
		payload,
	};
};

export const removeFromCart = (payload: any) => {
	return {
		type: REMOVE_FROM_CART,
		payload,
	};
};

export const deleteFromCart = (payload: any) => {
	return {
		type: DELETE_FROM_CART,
		payload,
	};
};

export const clearCart = () => {
	return {
		type: CLEAR_CART,
	};
};
