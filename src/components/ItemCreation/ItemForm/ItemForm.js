import { useState } from "react";
import Participant from "../Participants/Participant";

import { Amount, Div, Name, Section, Value } from "./style";

function ItemForm({ participants, item }) {
    const [itemData, setItemData] = useState({name: "", value: "", amount: ""});

    item.name = itemData.name;
    item.value = itemData.value;
    item.amount = itemData.amount;
    
    return (
        <Section>
            <Name value={itemData.name} onChange={e => setItemData({...itemData, name: e.target.value})} placeholder="name"></Name>
            <Div>
                <Value pattern="^[0-9]*\.?[0-9]{0,2}$" value={itemData.value} onChange={e => setItemData(() => (e.target.validity.valid ? {...itemData, value: e.target.value} : itemData))} type='text' placeholder="unitary value"></Value>
                <Amount pattern="^[0-9]*$" value={itemData.amount} onChange={e => setItemData(() => (e.target.validity.valid ? {...itemData, amount: e.target.value} : itemData))} type='text' placeholder="amount"></Amount>
            </Div>
            <Div>
                {participants.map(participant => <Participant key={participant.id} participant={participant} item={item}/>)}
            </Div>
        </Section>
    )
}

export default ItemForm;