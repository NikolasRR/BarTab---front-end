import { useState } from "react";

import { Header, Instruction, Main } from "./style";
import { FaReceipt } from "react-icons/fa";
import OpenFormButton from "../../components/TableCreation/OpenForm/EnableCreation";
import CreationForm from "../../components/TableCreation/CreationForm/CreationForm";

function TableStart() {
    const [creating, setCreating] = useState(false);

    return (
        <>
            <Header>BarTab<FaReceipt style={{ color: 'rgb(255,215,0)', fontSize: '50px' }} /></Header>
            <Main>
                <Instruction>first, create new table</Instruction>
                {
                    !creating &&
                    <OpenFormButton setCreating={setCreating} />
                }
                {
                    creating &&
                    <CreationForm />
                }

            </Main>
        </>
    )
}

export default TableStart;
