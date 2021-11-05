import axios from "axios";
import baseURL from "../../assets/common/baseurl";

const getProducts = () => {
	return axios.get(`${baseURL}products`);
};

const getProductCategories = () => {
	return axios.get(`${baseURL}category`);
};

export { getProducts, getProductCategories };
