import { useState } from "react";

import { Input, Section } from "./style";

function ParticipantForm({ index, participant, participants, setParticipants }) {
    const [name, setName] = useState(participant.name);

    participant.name = name;

    //need to study why this won't work
    function deleteForm(index) {
        let temp = [...participants];
        const removed = temp.splice(index, 1);
        const temp2 = [...participants];
        const abc = temp2.filter(participant => {
            const bool = !Object.is(removed[0], participant);
            console.log(removed[0], participant, bool);
            return (bool)
        });
        console.log('abc', abc);
        console.log('participants', participants);
        setParticipants([...abc]);
    }

    return (
        <Section>
            <Input onChange={e => { setName(e.target.value); }} value={name} placeholder="participant name"></Input>
        </Section>
    )
}

export default ParticipantForm;