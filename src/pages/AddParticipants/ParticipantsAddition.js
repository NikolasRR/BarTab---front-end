import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import ParticipantBox from "../../components/ParticipantsCreation/ParticipantForm";
import TableDataContext from "../../contexts/tableContext";
import requests from "../../services/API/requests";
import {
    Button,
    ButtonSmall,
    CreateSection,
    Instruction,
    Main,
    Participants,
    Actions,
    SecondaryInstructions,
    Input
} from "./style";

function ParticipantsAddition() {
    const [participants, setParticipants] = useState([]);
    const [inputName, setInputName] = useState("");
    const { tableData } = useContext(TableDataContext);
    const navigate = useNavigate();

    async function submitParticipants() {
        if (participants.length <= 1) {
            alert("at least 2 participants are required");
            return;
        }

        if (window.confirm("make sure everything is correct, after proceeding, a change is not possible")) {
            const hashTable = {};
            for (let i = 0; i < participants.length; i++) {
                if (hashTable[participants[i].name]) {
                    alert("no repeated names are allowed!");
                    return;
                }
                hashTable[participants[i].name] = true;
            }

            try {
                await requests.postParticipants(tableData.id, participants);
                navigate("/items");
            } catch (error) {
                if (error.response.data === "token invalid or expired") {
                    alert("session expired");
                    navigate("/sign-in");
                }
            }
        }
    }

    function addParticipant() {
        setParticipants([...participants, { name: inputName }]);
        setInputName("");
    }

    return (
        <>
            <Main>
                <Instruction>now, add the participants</Instruction>
                <SecondaryInstructions>
                    the user will be added automatically<br></br>
                    repeated names are not allowed
                </SecondaryInstructions>
                <CreateSection>
                    <Participants>
                        {participants.map((participant, index) => <ParticipantBox
                            key={index}
                            index={index}
                            name={participant.name}
                            participants={participants}
                            setParticipants={setParticipants}
                        />)}
                    </Participants>
                    <Actions>
                        <Input
                            onChange={e => setInputName(e.target.value)}
                            onKeyDown={e => { if (e.key === "Enter") addParticipant() }}
                            value={inputName}
                            placeholder="participant name"></Input>
                        <ButtonSmall
                            onClick={() => addParticipant()}>add</ButtonSmall>
                        <Button onClick={() => submitParticipants()}>proceed</Button>
                    </Actions>
                </CreateSection>
            </Main>
        </>
    );
}

export default ParticipantsAddition;