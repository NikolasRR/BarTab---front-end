import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import IndividualTab from "../../components/TabDisplay/IndividualTab/IndividualTab";
import Item from "../../components/TabDisplay/ItemListing/Item";
import TableDataContext from "../../contexts/tableContext";
import requests from "../../services/API/requests";
import { Button, Div, FullTable, Instruction, Main, PerParticipant, RunDown, TableItems, Total, TotalValue } from "./style";

function Tab() {
    const { tableData, setTableData } = useContext(TableDataContext);
    const navigate = useNavigate();

    const [tableItems, setTableItems] = useState({items: []});
    const [participantsItems, setParticipantsItems] = useState([]);
    console.log(tableItems);
    useEffect(() => {
        async function getItems() {
            try {
                const result1 = await requests.getParticipantsItems(tableData.id);
                const result2 = await requests.getTableItems(tableData.id);
                setParticipantsItems(result1.data);
                setTableItems(result2.data);

            } catch (error) {

            }
        }
        getItems();
    }, [tableData]);

    async function newTable() {
        if(!window.confirm("you will lose your current table, continue?")) return;
        try {
            await requests.deleteTable();
            setTableData({});
            navigate("/");
        } catch (error) {
            alert("try again later");
        }
    }

    return (
        <Main>
            <Instruction>and there you have it!</Instruction>
            <RunDown>
                <PerParticipant>
                    {participantsItems.map(pi => <IndividualTab key={pi.id} participant={pi} />)}
                </PerParticipant>
                    <Div>
                        <Total>TOTAL</Total>
                        <TotalValue>R$ {(tableItems.total / 100).toFixed(2)}</TotalValue>
                    </Div>
                <FullTable>
                    <TableItems>
                        {tableItems.items.map(item => <Item key={item.id} item={item} />)}
                    </TableItems>
                </FullTable>
                <Button onClick={() => newTable()}>create new table</Button>
            </RunDown>
        </Main>
    )
}

export default Tab;