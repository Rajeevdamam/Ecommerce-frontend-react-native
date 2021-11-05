import axios from "axios";
import baseURL from "../../assets/common/baseurl";

const registerUser = async (data: any) => {
	let user: any = await axios.post(
		`${baseURL}user/signup`,
		JSON.stringify(data),
		{ headers: { "Content-Type": "application/json" } }
	);
	return user.data;
};

const loginUser = async (data: any) => {
	let user = await axios.post(`${baseURL}user/login`, JSON.stringify(data), {
		headers: { "Content-Type": "application/json" },
	});
	return user.data;
};

const getUser = (id: any) => {
	return axios.get(`${baseURL}user/${id}`);
};

export { registerUser, loginUser, getUser };