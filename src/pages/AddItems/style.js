import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calC(100vh - 100px);
    background-color: #EEE8AA;
`;

export const Instruction = styled.p`
    font-family: 'Secular One', sans-serif;
    color: #F95636;
    margin-bottom: 5px;
    font-size: 20px;
`;

export const SecondaryInstructions = styled.p`
    font-family: 'Secular One', sans-serif;
    color: #F95636;
    margin-bottom: 22px;
    font-size: 13px;
    text-align: center;
`;

export const CreateSection = styled.section`
    height: 400px;
    width: 250px;
`;

export const Items = styled.section`
    height: 300px;
    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
`;

export const Options = styled.div`
    height: 40px;
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const ButtonSmall = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
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