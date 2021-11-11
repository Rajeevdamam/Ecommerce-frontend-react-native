import axios from "axios";
import baseURL from "./../../assets/common/baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCategories = () => {
	return axios.get(`${baseURL}category`);
};
