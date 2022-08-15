import { useState, useEffect } from "react";

import { Box } from "./style";

function Participant({ participant, item }) {
    const [selected, setSelected] = useState(false);
    const [itemParticipantsState, setItemParticipantsState] = useState([...item.participants]);

    useEffect(() => {
        item.participants = itemParticipantsState;
    }, [itemParticipantsState]);

    function addOrRemove() {
        if (alreadyAdded(item.participants, participant.id)) {
            setItemParticipantsState([...item.participants.filter(p => !(p.id === participant.id))]);
        } else {
            setItemParticipantsState([...item.participants, { id: participant.id }]);
        }
        item.participants = itemParticipantsState;
    }

    function alreadyAdded(participants, participantId) {
        let added = false;
        participants.forEach(p => {
            if (p.id === participantId) added = true;
        });
        return added;
    }

    return (
        <Box onClick={() => { setSelected(!selected); addOrRemove() }} selected={selected}>
            {participant.name}
        </Box>
    )
}

export default Participant;