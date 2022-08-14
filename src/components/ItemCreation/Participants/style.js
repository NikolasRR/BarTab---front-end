import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    width: 45px;
    border-radius: 7px;
    margin-bottom: 3px;
    font-size: 12px;
    padding-left: 3px;
    font-family: 'Secular One', sans-serif;
    color: #2F4F4F;
    overflow-x: hidden;
    &:hover {
        /* cursor: ${({ isDisabled }) => isDisabled ? "default" : "pointer"}; */
        cursor: pointer;
    }
    background-color: ${({ selected }) => selected ? "#1E90FF" : "#F0E68C"};;
`;