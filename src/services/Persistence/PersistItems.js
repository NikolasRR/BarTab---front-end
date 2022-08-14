import requests from "../API/requests";

async function PersistItems(tableId) {
    try {
        const response = await requests.getTableItems(tableId);
        if (response.data.length > 0) return true;
        return "stay";

    } catch (error) {
        return false;
    }

}

export default PersistItems;