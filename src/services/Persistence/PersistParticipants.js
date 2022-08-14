import requests from "../API/requests";

async function PersistParticipants(tableId) {
    try {
        const response = await requests.getParticipants(tableId);
        if (response.data.length > 0) return true;
        return "stay";

    } catch (error) {
        return false;
    }
}

export default PersistParticipants;