import styled from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";

export const Section = styled.section`
    position: relative;
    min-height: 30px;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 10px;
    border: 1px solid gray;
    font-family: 'Montserrat', sans-serif;
    & > p {
        height: 15px;
        display: flex;
        align-items: flex-end;
        white-space: nowrap;
        overflow: hidden;
    }
    margin-bottom: 5px;
`;

export const Amount = styled.p`
    color: #F95636;
    margin: 0 5px;
    width: 78px;
    font-size: 13px;
`;

export const Name = styled.p`
    color: #2F4F4F;
    width: 70px;
    height: 20px;
    font-size: 15px;
    margin-right: 5px;
`;

export const Value = styled.p`
    color: #359c35;
    width: 60px;
    font-size: 13px;
`;

export const Participants = styled(BsFillPeopleFill)`
    font-size: 15px;
    color: #2F4F4F;
    margin-right: 10px;
    &:hover {
        cursor: pointer;
    }
`;

export const Delete = styled(TiDeleteOutline)`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    &:hover {
        cursor: pointer;
    }
`;