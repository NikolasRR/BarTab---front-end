import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import PersistItems from "./PersistItems";
import PersistParticipants from "./PersistParticipants";
import PersistTable from "./PersistTable";
import TableDataContext from "../../contexts/tableContext";

function Persistency() {
    const { tableData, setTableData } = useContext(TableDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function run() {
            const tableStep = await PersistTable();
                if (!tableStep) {
                    navigate("/sign-in");
                    return;
                }
                if (tableStep === "stay") {
                    navigate("/");
                    return;
                }
                if (tableStep) {
                    setTableData(tableStep);
                }
            
            const participantsStep = await PersistParticipants(tableStep.id);
            if (participantsStep === "stay") {
                navigate("/participants");
                return;
            }

            const itemsStep = await PersistItems(tableStep.id);

            if (itemsStep === "stay") {
                navigate("/items");
                return;
            }
            navigate("/tab");
        }
        run();
    }, [])

    
    return null;
}

export default Persistency;