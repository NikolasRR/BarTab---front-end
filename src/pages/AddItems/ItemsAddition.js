import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemForm from "../../components/ItemCreation/ItemForm/ItemForm";

import TableDataContext from "../../contexts/tableContext";
import requests from "../../services/API/requests";
import { Button, ButtonSmall, CreateSection, Instruction, Main, Options, Items, SecondaryInstructions } from "./style";

function ItemsAddition() {
    const itemTemplate = { name: "", value: 0, amount: 1, participants: [] };

    const [items, setItems] = useState([itemTemplate]);
    const [participants, setParticipants] = useState([]);

    const { tableData } = useContext(TableDataContext);
    const navigate = useNavigate();


    useEffect(() => {
        async function getParticipants() {
            try {
                const result = await requests.getParticipants(tableData.id);
                setParticipants(result.data);
            } catch (error) {

            }
        }
        getParticipants();
    }, [tableData])

    async function submitItems() {
        if (!dataIsOk(items)) return;
        if (window.confirm("make sure everything is correct, after proceeding, a change is not possible")) {

            try {
                await requests.postItems(tableData.id, items);
                navigate("/tab");
            } catch (error) {
                if (error.response.data === "token invalid or expired") {
                    alert("session expired");
                    navigate("/sign-in");
                }
            }
        }
    }

    function dataIsOk(items) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].name === "" || items[i].amount === "") {
                alert("name and value cannot be empty");
                return false;
            }
            if (items[i].participants.length === 0 || items[i].value === ("" || "0")) {
                alert("must have at least 1 participant and 1 amount");
                return false;
            }

            items[i].value = Number(items[i].value);
            items[i].amount = Number(items[i].amount);
        }
        return true;
    }

    return (
        <>
            <Main>
                <Instruction>last, add the items</Instruction>
                <SecondaryInstructions>
                    name, unit value, and how many were ordered<br></br>
                    select the participants that shared the item (at least 1)
                </SecondaryInstructions>
                <CreateSection>
                    <Items>
                        {items.map((item, index) => {
                            return <ItemForm
                                key={index}
                                item={item}
                                participants={participants}
                            />;
                        })}
                    </Items>
                    <Options>
                        <ButtonSmall onClick={() => setItems([...items, itemTemplate])}>add</ButtonSmall>
                        <ButtonSmall onClick={() => setItems([...items.splice(0, items.length - 1)])}>remove last</ButtonSmall>
                    </Options>
                    <Button onClick={() => submitItems()}>proceed</Button>
                </CreateSection>
            </Main>
        </>
    );
}

export default ItemsAddition;