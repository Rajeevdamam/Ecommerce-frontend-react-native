import axios from "axios";
import baseURL from "./../../assets/common/baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCategories = () => {
	return axios.get(`${baseURL}category`);
};

export const editCategory = async (id: any, data: any) => {
	const token = await AsyncStorage.getItem("JWTtoken");

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};
	return axios.put(`${baseURL}category/${id}`, data, config);
};

export const addCategory = async (id: any, data: any) => {
	const token = await AsyncStorage.getItem("JWTtoken");

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};
	return axios.post(`${baseURL}category`, data, config);
};
