import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Amount, Name, Section, Value, Participants, Delete } from "./style";

function ItemBox({ item, items, setItems, index }) {

    function deleteThis(index) {
        let temp = [...items];
        temp.splice(index, 1);
        setItems([...temp]);
    }

    function DataTipGenerator() {
        let dataTip = "participants:<br/>";
        item.participants.forEach((participant, index) => {
            if (index !== item.participants.length - 1) dataTip += `${participant.name}<br/>`;
            else dataTip += `${participant.name}`;
        });
        return dataTip;
    }

    return (
        <Section>
            <Amount>{item.amount}un x {parseFloat(item.value).toFixed(2)}</Amount>
            <Name>{item.name}</Name>
            <Participants data-tip={DataTipGenerator()}/>
            <ReactTooltip effect="solid" multiline={true}/>
            <Value>R$ {(item.value * item.amount).toFixed(2)}</Value>
            <Delete onClick={() => deleteThis(index)} />
        </Section>
    )
}

export default ItemBox;