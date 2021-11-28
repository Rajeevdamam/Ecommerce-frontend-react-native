import { SET_CURRENT_USER, SET_USER_DATA } from "./../Actions/authAction";

const initialStateOfUser = {
	loggedInUser: "",
	userProfile: {},
	isAuthenticated: false,
	userDetails: {},
};

const userReducer = (currentState = initialStateOfUser, action: any) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...currentState,
				isAuthenticated: action.isEmpty,
				loggedInUser: action.decode,
				userProfile: action.payload,
			};
		case SET_USER_DATA:
			return {
				...currentState,
				userDetails: action.payload,
			};
		default:
			return currentState;
	}
};

export default userReducer;
