import axios from "axios";
import baseURL from "./../../assets/common/baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getProducts = () => {
	return axios.get(`${baseURL}products`);
};

export const deleteProduct = async (id: string) => {
	const token = await AsyncStorage.getItem("JWTtoken");
	return axios.delete(`${baseURL}products/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export const getTopFiveProducts = () => {
	return axios.get(`${baseURL}products/top/five`);
};
