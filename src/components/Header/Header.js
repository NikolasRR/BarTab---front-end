import { useContext } from "react";
import { FaReceipt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import TableDataContext from "../../contexts/tableContext";
import requests from "../../services/API/requests";
import { Current, Logo, Logout, NewTable, Options, TableName } from "./style";

function Header() {
    const { tableData, setTableData } = useContext(TableDataContext);
    const navigate = useNavigate();

    async function newTable() {
        if (!window.confirm("you will lose your current table, continue?")) return;
        try {
            await requests.deleteTable();
            setTableData({});
            navigate("/");
        } catch (error) {
            alert("try again later");
        }
    }

    async function logout() {
        try {
            await requests.logout();
            setTableData({});
            navigate("/sign-in");
        } catch (error) {
            alert("try again later");
        }
    }

    return (<>
        <Logo>BarTab<FaReceipt style={{ color: 'rgb(255,215,0)', fontSize: '50px' }} /></Logo>
        <Current>
            <Options>
                {
                    tableData.name &&
                    <>
                        <TableName>Table: {tableData.name}</TableName>
                        <NewTable onClick={() => newTable()}>new table</NewTable>
                        <Logout onClick={() => logout()}>logout</Logout>
                    </>
                }
            </Options>
        </Current>
    </>)
}

export default Header;