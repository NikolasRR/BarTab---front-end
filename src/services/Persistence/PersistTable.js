import requests from "../API/requests";

async function PersistTable() {
    try {
        const response = await requests.getTable();
        if (response.data.name) {
            return response.data;
        }
        return "stay";

    } catch (error) {
        return false;
    }
}

export default PersistTable;