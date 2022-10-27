import { useState } from "react";

import { Box, Name } from "./style";

function Participant({ participant, itemData, setItemData }) {
    const [selected, setSelected] = useState(false);

    function changeSelectedState() {
        if (selected) {
            let currentParticipants = [...itemData.participants];
            const index = currentParticipants.findIndex(current => current.id === participant.id);
            currentParticipants.splice(index, 1);
            setItemData({...itemData, participants: [...currentParticipants]});
            return
        }
        setItemData({...itemData, participants: [...itemData.participants, { id: participant.id }]});
    }

    return (
        <Box onClick={() => {
            setSelected(!selected);
            changeSelectedState();
        }}
            selected={selected}
        >
            <Name>{participant.name}</Name>
        </Box>
    )
}

export default Participant;