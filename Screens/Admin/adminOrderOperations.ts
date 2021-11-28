import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../../assets/common/baseurl";

export const getOrders = async () => {
	return axios.get(`${baseURL}orders`);
};

export const updateOrder = async (id: any, data: any) => {
	const token = await AsyncStorage.getItem("JWTtoken");

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};
	return axios.patch(`${baseURL}orders/${id}`, data, config);
};
