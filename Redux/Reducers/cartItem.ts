import {
	addToCartFunctionality,
	removeFromCartFunctionality,
} from "../../Utils/cartFunctionality";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
	DELETE_FROM_CART,
} from "./../constants";
import { deleteFromCartFunctionality } from "./../../Utils/cartFunctionality";

const initialStateOfCart = {
	cartData: {},
};

const cartItems = (currentState = initialStateOfCart, action: any): any => {
	let cartData;
	switch (action.type) {
		case ADD_TO_CART:
			({ cartData } = addToCartFunctionality(
				currentState.cartData,
				action.payload
			));
			return {
				...currentState,
				cartData: { ...cartData },
			};
		case REMOVE_FROM_CART:
			({ cartData } = removeFromCartFunctionality(
				currentState.cartData,
				action.payload
			));
			return {
				currentState,
				cartData: { ...cartData },
			};
		case DELETE_FROM_CART:
			({ cartData } = deleteFromCartFunctionality(
				currentState.cartData,
				action.payload
			));
			return {
				currentState,
				cartData: { ...cartData },
			};
		case CLEAR_CART:
			return {
				cartData: {},
			};
		default:
			return currentState;
	}
};

export default cartItems;
