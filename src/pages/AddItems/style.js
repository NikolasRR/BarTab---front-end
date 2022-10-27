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
    height: 180px;
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
    height: 190px;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const Form = styled.section`
    width: 250px;
    height: 100px;
    background-color: #8B4513;
    border-radius: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Div = styled.div`
    width: 220px;
    height:41px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  
    scrollbar-width: none;
`;

export const Name = styled.input`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin-right: 7.5px;
    padding-left: 10px;
    background-color: #F0E68C;
    color: #2F4F4F;
    font-family: 'Secular One', sans-serif;
    &:focus {
        outline: none;
    }
`;

export const Value = styled.input`
    width: 60px;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    margin-right:7.5px;
    color: #2F4F4F;
    background-color: #F0E68C;
    font-family: 'Secular One', sans-serif;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    &:focus {
        outline: none;
    }
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
    color: #2F4F4F;
    font-family: 'Secular One', sans-serif;
    font-size: 13px;
`;

export const AmountButtons = styled.div`
    width: 25px;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
`;

export const AmountButton = styled.button`
    width: 25px;
    height: 20px;
    border: none;
    color: #2F4F4F;
    font-family: 'Secular One', sans-serif;
    background-color: #F0E68C;
    border-left: 1px solid #2F4F4F;
    border-bottom: ${({ topRight }) => topRight ? "1px solid #2F4F4F" : 0};
    border-top-right-radius: ${({ topRight }) => topRight ? topRight : 0};
    border-bottom-right-radius: ${({ bottomRight }) => bottomRight ? bottomRight : 0};
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
    margin-bottom: 10px;
    font-family: 'Secular One', sans-serif;
    color: ${({color1}) => color1};
    background-color: ${({color2}) => color2};;
    font-size: 15px;
    &:hover {
        cursor: ${({ isDisabled }) => isDisabled ? "default" : "pointer"};
    }
    opacity: ${({ isDisabled }) => isDisabled ? "0.7" : "1"};
`;