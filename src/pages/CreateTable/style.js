import styled from "styled-components";

export const Header = styled.header`
    height: 100px;
    width: 100%;
    background-color: rgb(139,69,19);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Righteous', cursive;
    font-size: 50px;
    color: rgb(255,215,0);
`;

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
    margin-bottom: 30px;
    font-size: 20px;
`;