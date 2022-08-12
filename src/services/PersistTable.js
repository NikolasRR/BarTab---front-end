import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import TableDataContext from "../contexts/tableContext";
import requests from "./requests";

function PersistTable () {
    const { setTableData } = useContext(TableDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async function() {
            try {
                const response = await requests.getTable();
                if (response.data.name) {
                    setTableData(response.data);
                    // navigate("/participants");
                    return;
                }

            } catch (error) {
                if (error.response.status === 422) {
                    navigate("/sign-in");
                    return;
                }
                navigate("/");
            }
        })()
    }, []);

    return null;
}

export default PersistTable;