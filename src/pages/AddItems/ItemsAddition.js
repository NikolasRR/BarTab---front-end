import { useState, useContext, useEffect } from "react";

import ModalContext from "../../contexts/modalContext";
import TableDataContext from "../../contexts/tableContext";

import requests from "../../services/API/requests";

import ItemBox from "../../components/ItemCreation/Item/ItemBox";
import Participant from "../../components/ItemCreation/Participants/Participant";
import Modal from "../../components/Modal/Modal";
import {
	Button,
	CreateSection,
	Instruction,
	Main,
	Actions,
	Items,
	SecondaryInstructions,
	Div,
	Name,
	Value,
	Amount,
	Form,
	AmountButtons,
	AmountButton
} from "./style";

function ItemsAddition() {
	const itemTemplate = { name: "", value: "", amount: 1, participants: [] };

	const [items, setItems] = useState([]);
	const [itemData, setItemData] = useState(itemTemplate);
	const [participants, setParticipants] = useState([]);
	const [signal, setSignal] = useState(false);

	const { tableData } = useContext(TableDataContext);
	const { isModalOpen, setIsModalOpen, setModalType, setErrorMessage } = useContext(ModalContext);

	function handleError(message) {
		setModalType("error");
		setErrorMessage(message);
		setIsModalOpen(true);
	}

	useEffect(() => {
		async function getParticipants() {
			if(!tableData.id) return;
			try {
				const result = await requests.getParticipants(tableData.id);
				setParticipants(result.data);
			} catch (error) {
				handleError(error.response.data);
			}
		}
		getParticipants();
	}, [tableData])

	function verifyItemData() {
		if (itemData.name.length <= 1) {
			handleError("name must have at least 2 characters");
			return;
		}
		if (itemData.value === "") {
			handleError("value cannot be empty");
			return;
		}
		if (itemData.participants.length < 1) {
			handleError("must have at least 1 participant");
			return;
		}
		return true;
	}

	return (
		<>
			{
				isModalOpen &&
				<Modal errorHandler={handleError} data={items} tableId={tableData.id} />
			}
			<Main>
				<Instruction>last, add the items</Instruction>
				<SecondaryInstructions>
					name, unit value, and how many were ordered<br></br>
					select the participants that shared the item (at least 1)
				</SecondaryInstructions>
				<CreateSection>
					<Items>
						{items.map((item, index) => {
							return <ItemBox
								key={index}
								item={item}
								items={items}
								setItems={setItems}
								index={index}
							/>;
						})}
					</Items>
					<Actions>
						<Form>
							<Div>
								<Name
									value={itemData.name}
									onChange={e => setItemData({ ...itemData, name: e.target.value })}
									placeholder="name"
								></Name>
								<Value
									pattern="^[0-9]*\.?[0-9]{0,2}$"
									value={itemData.value}
									onChange={e => setItemData(() => (e.target.validity.valid ? { ...itemData, value: e.target.value } : itemData))}
									type='text'
									placeholder="value"
								></Value>
								<Amount>{itemData.amount}</Amount>
								<AmountButtons>
									<AmountButton
										onClick={() => setItemData({ ...itemData, amount: itemData.amount + 1 })}
										topRight={"10px"}
									>+</AmountButton>
									<AmountButton
										onClick={() => { if (itemData.amount - 1 > 0) setItemData({ ...itemData, amount: itemData.amount - 1 }) }}
										bottomRight={"10px"}
									>-</AmountButton>
								</AmountButtons>
							</Div>
							<Div style={{ height: "50px" }}>
								{participants.map(participant =>
									<Participant
										key={participant.id}
										participant={participant}
										itemData={itemData}
										setItemData={setItemData}
										signal={signal}
									/>
								)}
							</Div>
						</Form>
						<Button
							color1={"rgb(139,69,19)"}
							color2={"rgb(255,215,0)"}
							onClick={() => {
								if (verifyItemData()) {
									setItems([...items, itemData]);
									setSignal(true);
									setTimeout(() => {
										setSignal(false);
									}, 1000);
									setItemData(itemTemplate);
								}
							}}
						>add</Button>
						<Button
							color1={"rgb(255,215,0)"}
							color2={"rgb(139,69,19)"}
							onClick={() => {
								if (items.length >= 1) {
									setModalType("check");
								} else {
									setModalType("error");
									setErrorMessage("you need at least 1 item to continue!");
								}
								setIsModalOpen(true);
							}}
						>proceed</Button>
					</Actions>
				</CreateSection>
			</Main>
		</>
	);
}

export default ItemsAddition;