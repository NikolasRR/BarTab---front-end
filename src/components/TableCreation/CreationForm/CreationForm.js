import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import requests from "../../../services/API/requests";
import { Form, Input, Button } from "./style";
import TableDataContext from "../../../contexts/tableContext";

function CreationForm() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const { setTableData } = useContext(TableDataContext);

    const navigate = useNavigate();

    async function SubmitTable(e) {
        e.preventDefault();
        setLoading(true);

        if(name.length === 0) {
            alert("a name is required!");
            setLoading(false);
            return;
        }

        try {
            const response = await requests.postTable({ name: name });
            setTableData(response.data);

            navigate("/participants");
        } catch (error) {
            alert("algo deu errado");
            setLoading(false);
        }
    }

    return (
        <Form onSubmit={e => SubmitTable(e)}>
            <Input
                placeholder="table name"
                onChange={e => setName(e.target.value)}
                value={name}
            ></Input>
            <Button isDisabled={loading} disabled={loading} type="submit">create</Button>
        </Form>
    )
}

export default CreationForm;