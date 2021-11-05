import { ADD_TO_SHIPPING, EDIT_SHIPPING } from "../constants";

const initialStateOfShipping: any = {
	shippingData: {},
	selectedShipping:{}
};

export const shippingDetails = (
	currentState = initialStateOfShipping,
	action: any
): any => {
	switch (action.type) {
		case ADD_TO_SHIPPING:
			return {
				shippingData: { ...action.payload },
			};
		case EDIT_SHIPPING:
			return {
				shippingData: {
					...currentState.shippingData,
					...action.payload,
				},
			};

		default:
			return currentState;
	}
};
