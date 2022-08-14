import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import ParticipantForm from "../../components/ParticipantsCreation/ParticipantForm";
import TableDataContext from "../../contexts/tableContext";
import requests from "../../services/API/requests";
import { Button, ButtonSmall, CreateSection, Instruction, Main, Options, Participants, SecondaryInstructions } from "./style";

function ParticipantsAddition() {
    const [participants, setParticipants] = useState([{ name: "" }]);
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
                        {participants.map((participant, index) => {
                            return <ParticipantForm
                                key={index}
                                index={index}
                                participants={participants}
                                setParticipants={setParticipants}
                                participant={participant}
                            />;
                        })}
                    </Participants>
                    <Options>
                        <ButtonSmall onClick={() => setParticipants([...participants, { name: "" }])}>add</ButtonSmall>
                        <ButtonSmall onClick={() => setParticipants([...participants.splice(0, participants.length - 1)])}>remove last</ButtonSmall>
                    </Options>
                    <Button onClick={() => submitParticipants()}>proceed</Button>
                </CreateSection>
            </Main>
        </>
    );
}

export default ParticipantsAddition;