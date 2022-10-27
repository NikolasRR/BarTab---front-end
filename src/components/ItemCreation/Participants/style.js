import styled from "styled-components";

export const Box = styled.div`
    display: grid;
    align-items: center;
    height: 20px;
    width: 45px;
    border-radius: 7px;
    margin-bottom: 3px;
    margin-right: 13.34px;
    font-size: 12px;
    font-family: 'Secular One', sans-serif;
    color: #2F4F4F;
    &:hover {
        cursor: pointer;
    }
    &:nth-child(4n) {
        margin-right: 0;
    }
    background-color: #F0E68C;
    border: 2px solid ${({ selected }) => selected ? "#1E90FF" : "#F0E68C"};;
`;

export const Name = styled.p`
    display: inline-block;
    width: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;