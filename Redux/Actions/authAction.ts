import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import baseURL from "./../../assets/common/baseurl";
import axios from "axios";
import { isObjEmpty } from "./../../Utils/isObjectEmpty";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_USER_DATA = "SET_USER_DATA";

export const loginUser = async (
	dispatch: any,
	data: any,
	setLoading: any,
	setEmail: any,
	setPassword: any
) => {
	try {
		let user: any = await axios.post(
			`${baseURL}user/login`,
			JSON.stringify(data),
			{
				headers: { "Content-Type": "application/json" },
			}
		);

		if (user) {
			const token = user.data.token;
			await AsyncStorage.setItem("JWTtoken", token);
			const decode: any = jwt_decode(token);
			await AsyncStorage.setItem("user", decode.userId);
			let loggedInUser = await AsyncStorage.getItem("user");

			const userProfile: any = await getUserProfile(loggedInUser);
			dispatch(setUserDetails(userProfile.data.data));

			// Toast.show({
			// 	topOffset: 60,
			// 	type: "success",
			// 	text1: "Logged in Successfully",
			// });
			dispatch(setCurrentUser(!isObjEmpty(loggedInUser), loggedInUser, decode));

			setLoading(false);
			setEmail("");
			setPassword("");
		} else {
			logoutUser(dispatch);
			setLoading(false);
		}
	} catch (error: any) {
		Toast.show({
			topOffset: 60,
			type: "error",
			text1: "Login Unsuccessfull",
			text2: "Please Try Again",
		});
		setLoading(false);
		console.log(error.response.data);

		logoutUser(dispatch);
	}
};

export const getUserProfile = (id: any) => {
	return axios.get(`${baseURL}user/get?id=${id}`);
};

export const logoutUser = async (dispatch: any) => {
	await AsyncStorage.removeItem("JWTtoken");
	dispatch(setCurrentUser(false, "", {}));
	dispatch(setUserDetails({}));
};

export const socialLogin = async (
	dispatch: any,
	data: any,
	setLoading: any
) => {
	try {
		let user: any = await axios.post(
			`${baseURL}user/social/login`,
			JSON.stringify({ ...data }),
			{
				headers: { "Content-Type": "application/json" },
			}
		);

		if (user) {
			const token = user.data.token;
			await AsyncStorage.setItem("JWTtoken", token);
			const decode: any = jwt_decode(token);
			await AsyncStorage.setItem("user", decode.userId);
			let loggedInUser = await AsyncStorage.getItem("user");

			const userProfile: any = await getUserProfile(loggedInUser);
			dispatch(setUserDetails(userProfile.data.data));

			// Toast.show({
			// 	topOffset: 60,
			// 	type: "success",
			// 	text1: "Logged in Successfully",
			// });
			dispatch(setCurrentUser(!isObjEmpty(loggedInUser), loggedInUser, decode));

			setLoading(false);
		} else {
			logoutUser(dispatch);
			setLoading(false);
		}
	} catch (error: any) {
		Toast.show({
			topOffset: 60,
			type: "error",
			text1: "Login Unsuccessfull",
			text2: "Please Try Again",
		});
		setLoading(false);
		logoutUser(dispatch);
	}
};

export const setCurrentUser = (
	isAuthenticated: boolean,
	decoded: any,
	user: any
) => {
	return {
		type: SET_CURRENT_USER,
		isEmpty: isAuthenticated,
		payload: user,
		decode: decoded,
	};
};

export const setUserDetails = (payload: any) => {
	return {
		type: SET_USER_DATA,
		payload: payload,
	};
};
