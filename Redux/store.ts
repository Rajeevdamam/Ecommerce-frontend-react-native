import { createStore, combineReducers } from "redux";
import cartItems from "./Reducers/cartItem";
import { shippingDetails } from "./Reducers/shippingDetails";
import { paymentDetails } from "./Reducers/paymentDetails";
import userReducer from "./Reducers/authReducer";

const reducer = combineReducers({
	cartItems: cartItems,
	shippingDetails: shippingDetails,
	paymentDetails: paymentDetails,
	userReducer: userReducer,
});

const store = createStore(reducer);

export default store;
