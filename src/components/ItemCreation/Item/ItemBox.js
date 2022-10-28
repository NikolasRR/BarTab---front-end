import { useState } from "react";

import { Amount, Name, Section, Value, Participants, Delete } from "./style";

function ItemBox({ item, items, setItems, index }) {

    function deleteThis(index) {
        let temp = [...items];
        temp.splice(index, 1);
        setItems([...temp]);
    }

    return (
        <Section>
            <Amount>{item.amount}un x {parseFloat(item.value).toFixed(2)}</Amount>
            <Name>{item.name}</Name>
            <Participants />
            <Value>R$ {(item.value * item.amount).toFixed(2)}</Value>
            <Delete onClick={() => deleteThis(index)} />
        </Section>
    )
}

export default ItemBox;