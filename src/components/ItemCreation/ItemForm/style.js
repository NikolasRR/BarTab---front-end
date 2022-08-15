import styled from "styled-components";

export const Section = styled.section`
    width: 250px;
    min-height: 141px;
    background-color: #D2691E;
    border-radius: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled.input`
    width: 220px;
    height: 40px;
    margin: 6px 0 3px 0;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    background-color: #F0E68C;
    font-family: 'Secular One', sans-serif;
    &:focus {
        outline: none;
    }
`;

export const Div = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3px;
`;

export const Amount = styled.input`
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    background-color: #F0E68C;
    font-family: 'Secular One', sans-serif;
    font-family: 'Secular One', sans-serif;
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
    &:focus {
        outline: none;
    }
`;

export const Value = styled.input`
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    background-color: #F0E68C;
    font-family: 'Secular One', sans-serif;
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
    &:focus {
        outline: none;
    }
`;