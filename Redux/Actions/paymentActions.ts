import { ADD_TO_PAYMENT } from "./../constants";

export const addToPayment = (payload: any) => {
	return {
		type: ADD_TO_PAYMENT,
		payload,
	};
};
