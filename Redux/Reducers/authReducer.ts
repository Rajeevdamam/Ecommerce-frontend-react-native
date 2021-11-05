import { SET_CURRENT_USER } from "./../Actions/authAction";

const initialStateOfUser = {
	loggedInUser: "",
	userProfile: {},
	isAuthenticated: false,
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
		default:
			return currentState;
	}
};

export default userReducer;
