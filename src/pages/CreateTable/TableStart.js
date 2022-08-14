import { useState } from "react";

import { Instruction, Main } from "./style";
import OpenFormButton from "../../components/TableCreation/OpenForm/EnableCreation";
import CreationForm from "../../components/TableCreation/CreationForm/CreationForm";

function TableStart() {
    const [creating, setCreating] = useState(false);

    return (
        <>
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
