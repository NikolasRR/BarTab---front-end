import { Div, ItemAmount, ItemName, ItemTotal } from "./style";

function Item({ item, tabType }) {
    return ( tabType === "individual" ? 
        (<Div>
            <ItemAmount>x{item.amount}</ItemAmount>
            <ItemName>{item.name}</ItemName>
            <ItemTotal>R$ {((item.value * item.amount) / (item.participantsAmount * 100)).toFixed(2)}</ItemTotal>
        </Div>)
        :
        (<Div>
            <ItemAmount>x{item.amount}</ItemAmount>
            <ItemName>{item.name}</ItemName>
            <ItemTotal>R$ {((item.value * item.amount) / 100).toFixed(2)}</ItemTotal>
        </Div>)
    )
}

export default Item;