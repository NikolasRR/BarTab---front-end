import api from "./api";

const config = { withCredentials: true };

async function signUp(data) {
	const response = await api.post("/sign-up", data);
	return response;
}

async function signIn(data) {
	const response = await api.post(`/sign-in`, data, config);
	return response;
}

async function postTable(data) {
	const response = await api.post("/table", data, config);
	return response;
}

async function getTable() {
	const response = await api.get("/table", config);
	return response;
}

async function postParticipants(tableId, data) {
	const response = await api.post(`/participants/${tableId}/`, data, config);
	return response;
}

async function postItems(tableId, data) {
	const response = await api.post(`/items/${tableId}`, data, config);
	return response;
}


const requests = {
	signUp,
	signIn,
	postTable,
	getTable,
	postParticipants,
	postItems
};

export default requests;

