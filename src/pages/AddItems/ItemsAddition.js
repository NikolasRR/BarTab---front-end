import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemBox from "../../components/ItemCreation/Item/ItemBox";
import Participant from "../../components/ItemCreation/Participants/Participant";

import TableDataContext from "../../contexts/tableContext";
import requests from "../../services/API/requests";
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
	const navigate = useNavigate();
	
	useEffect(() => {
		async function getParticipants() {
			try {
				const result = await requests.getParticipants(tableData.id);
				setParticipants(result.data);
			} catch (error) {

			}
		}
		getParticipants();
	}, [tableData])

	async function submitItems() {
		if (window.confirm("make sure everything is correct, after proceeding, a change is not possible")) {

			try {
				await requests.postItems(tableData.id, items);
				navigate("/tab");
			} catch (error) {
				if (error.response.data === "token invalid or expired") {
					alert("session expired");
					navigate("/sign-in");
				}
			}
		}
	}

	function verifyItemData() {
		if(itemData.name.length <= 1){
			alert("name too short");
			return;
		} 
		if(itemData.value === "") {
			alert("value cannot be empty");
			return;
		}
		if(itemData.participants.length < 1) {
			alert("must have at least 1 participant");
			return;
		} 
		return true;
	}

	return (
		<>
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
							onClick={() => submitItems()}
						>proceed</Button>
					</Actions>
				</CreateSection>
			</Main>
		</>
	);
}

export default ItemsAddition;