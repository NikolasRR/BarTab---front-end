import styled from "styled-components";

export const Section = styled.section`
    min-height: 50px;
    width: 240px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(139,69,19);
    border-radius: 10px;
    margin-bottom: 5px;
    background-color: #F0E68C;
`;

export const Input = styled.input`
    width: 190px;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    background-color: #F0E68C;
    font-family: 'Secular One', sans-serif;
    &:focus {
        outline: none;
    }
`;
