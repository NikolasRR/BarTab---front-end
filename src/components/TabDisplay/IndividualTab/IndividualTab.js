import { useState } from "react";
import Item from "../ItemListing/Item";

import { Div, Name, NameAndTotal, ParticipantTab, Total } from "./style";


function IndividualTab({ participant }) {
    const [items, setItems] = useState([...participant.items]);

    return (
        <ParticipantTab>
            <NameAndTotal>
                <Name>{participant.name}</Name>
                <Total>R$ {participant.total / 100}</Total>
            </NameAndTotal>
            <Div>
                {items.map(item => <Item key={item.id} item={item} tabType={"individual"} />)}
            </Div>
        </ParticipantTab>
    )
}

export default IndividualTab;