import { Name, Section, Delete } from "./style";

function ParticipantBox({ index, name, participants, setParticipants }) {
    
    function deleteThis(index) {
        let temp = [...participants];
        temp.splice(index, 1);
        setParticipants([...temp]);
    }

    return (
        <Section>
            <Name>{name}</Name>
            <Delete onClick={() => deleteThis(index)}/>
        </Section>
    )
}

export default ParticipantBox;