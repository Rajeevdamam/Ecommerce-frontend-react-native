import { ADD_TO_PAYMENT } from "../constants";

const initialStateOfPayment: any = {
	paymentData: {},
};

export const paymentDetails = (
	currentState = initialStateOfPayment,
	action: any
): any => {
	switch (action.type) {
		case ADD_TO_PAYMENT:
			return {
				paymentData: { ...action.payload },
			};

		default:
			return currentState;
	}
};
