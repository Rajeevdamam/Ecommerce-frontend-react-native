import { ADD_TO_SHIPPING, EDIT_SHIPPING } from "./../constants";

export const addToShipping = (payload: any) => {
	return {
		type: ADD_TO_SHIPPING,
		payload,
	};
};

export const editShipping = (payload: any) => {
	return {
		type: EDIT_SHIPPING,
		payload,
	};
};
