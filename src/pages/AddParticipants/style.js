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
`;

export const SecondaryInstructions = styled.p`
    font-family: 'Secular One', sans-serif;
    color: #F95636;
    margin-bottom: 20px;
    font-size: 13px;
    text-align: center;
`;

export const CreateSection = styled.section`
    height: 370px;
    width: 250px;
    margin-bottom: 10px;
`;

export const Participants = styled.section`
    height: 250px;
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

export const Actions = styled.div`
    height: 40px;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 25px 0;
`;

export const ButtonSmall = styled.button`
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-family: 'Secular One', sans-serif;
    color: rgb(139,69,19);
    background-color: rgb(255,215,0);
    font-size: 15px;
    &:hover {
        cursor: ${({ isDisabled }) => isDisabled ? "default" : "pointer"};
    }
    opacity: ${({ isDisabled }) => isDisabled ? "0.7" : "1"};
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

export const Input = styled.input`
    width: 200px;
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