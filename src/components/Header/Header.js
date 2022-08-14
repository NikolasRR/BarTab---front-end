import { FaReceipt } from "react-icons/fa";
import { Logo } from "./style";

function Header(params) {
    return (
        <Logo>BarTab<FaReceipt style={{ color: 'rgb(255,215,0)', fontSize: '50px' }} /></Logo>
    )
}

export default Header;