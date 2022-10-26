import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 90px);
    background-color: #EEE8AA;
`;

export const Instruction = styled.p`
    font-family: 'Secular One', sans-serif;
    color: #F95636;
    margin: 30px 0 15px 0;
    font-size: 20px;
    text-align: center;
`;

export const SecondaryInstructions = styled.p`
    font-family: 'Secular One', sans-serif;
    color: #F95636;
    margin-bottom: 20px;
    font-size: 13px;
    text-align: center;
`;

export const CreateSection = styled.section`
    height: 400px;
    width: 250px;
    margin-bottom: 10px;
    
`;

export const Items = styled.section`
    height: 130px;
    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  
    scrollbar-width: none;
`;

export const Actions = styled.section`
    height: 200px;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const Form = styled.section`
    width: 250px;
    min-height: 141px;
    border-radius: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button`
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    font-family: 'Secular One', sans-serif;
    color: rgb(255,215,0);
    background-color: rgb(139,69,19);
    font-size: 15px;
    &:hover {
        cursor: ${({ isDisabled }) => isDisabled ? "default" : "pointer"};
    }
    opacity: ${({ isDisabled }) => isDisabled ? "0.7" : "1"};
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
    flex-wrap: wrap;
    margin-bottom: 3px;
`;

export const Amount = styled.p`
    width: 20px;
    height: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: #F0E68C;
    font-family: 'Secular One', sans-serif;
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
    margin-right: 55px;
    -moz-appearance: textfield;
    &:focus {
        outline: none;
    }
`;

export const PlusMinusButtons = styled.div`
    width: 25px;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
`;

export const Plus = styled.button`
    width: 25px;
    height: 20px;
    border: none;
    border-top-right-radius: 10px;
    font-family: 'Secular One', sans-serif;
    background-color: #F0E68C;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
`;

export const Minus = styled.button`
    width: 25px;
    height: 20px;
    border: none;
    border-bottom-right-radius: 10px;
    font-family: 'Secular One', sans-serif;
    background-color: #F0E68C;
    border-left: 1px solid black;
    &:hover {
        cursor: ${({ isDisabled }) => isDisabled ? "default" : "pointer"};
    }
    opacity: ${({ isDisabled }) => isDisabled ? "0.7" : "1"};
`;