import { BsFillPlusSquareFill } from "react-icons/bs";

function OpenFormButton({ setCreating }) {
    return (
        <BsFillPlusSquareFill
            onClick={() => setCreating(true)}
            style={{ color: '#F95636', fontSize: '50px', cursor: 'pointer' }}
        />
    )
}

export default OpenFormButton;