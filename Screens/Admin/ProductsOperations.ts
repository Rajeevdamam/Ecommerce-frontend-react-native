import axios from "axios";
import baseURL from "./../../assets/common/baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getProducts = () => {
	return axios.get(`${baseURL}products`);
};
