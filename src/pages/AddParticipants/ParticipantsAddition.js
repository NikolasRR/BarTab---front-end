import { useState, useContext } from "react";

import ModalContext from "../../contexts/modalContext";

import ParticipantBox from "../../components/ParticipantsCreation/ParticipantBox";
import TableDataContext from "../../contexts/tableContext";
import Modal from "../../components/Modal/Modal";
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
	const { isModalOpen, setIsModalOpen, setModalType, setErrorMessage } = useContext(ModalContext);

    function handleError(message) {
		setModalType("error");
		setErrorMessage(message);
		setIsModalOpen(true);
	}

    function addParticipant() {
        if (inputName.length < 2) {
            handleError("the name must have at least 2 characters");
            return;
        }
        setParticipants([...participants, { name: inputName }]);
        setInputName("");
    }

    return (
        <>
            {
				isModalOpen &&
				<Modal errorHandler={handleError} data={participants} tableId={tableData.id} type={"participants"} />
			}
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
                        <Button onClick={() => {
                            if (participants.length > 1) {
                                setModalType("check");
								setIsModalOpen(true);
                            } else {
                                handleError("you need at least 2 participants to continue!");
                            }

                        }}>proceed</Button>
                    </Actions>
                </CreateSection>
            </Main>
        </>
    );
}

export default ParticipantsAddition;