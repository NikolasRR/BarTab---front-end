import { Div, ItemAmount, ItemName, ItemTotal } from "./style";

function Item({ item, tabType }) {
    const denominator = tabType === "individual" ? (item.participantsAmount * 100) : 100;
    return (
        <Div>
            <ItemAmount>x{item.amount}</ItemAmount>
            <ItemName>{item.name}</ItemName>
            <ItemTotal>
                R$ {((item.value * item.amount) / denominator).toFixed(2)}
            </ItemTotal>
        </Div>
    )
}

export default Item;