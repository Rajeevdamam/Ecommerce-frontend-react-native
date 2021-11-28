import axios from "axios";
import baseURL from "../../assets/common/baseurl";

export const addOrder = async (data: any) => {
	return axios.post(`${baseURL}orders`, JSON.stringify(data), {
		headers: { "Content-Type": "application/json" },
	});
};
