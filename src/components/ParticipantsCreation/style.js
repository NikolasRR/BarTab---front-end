import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

export const Section = styled.section`
    min-height: 30px;
    width: 240px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 5px;
    padding-left: 5px;
    background-color: #F0E68C;
    border: 1px solid gray;
`;

export const Name = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #2F435A;
`;

export const Delete = styled(TiDeleteOutline)`
    font-size: 20px;
    color: #D2691E;
    &:hover {
        cursor: pointer;
    }
`;
