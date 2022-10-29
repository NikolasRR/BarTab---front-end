import styled from "styled-components";

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.4);
    position: fixed;
    z-index:2;
`;

export const ModalContainer = styled.div`
    width: 350px;
    height: 150px;
    left: 413px;
    top: 349px;
    margin-top: calc(50vh - 165px);
    margin-left: calc(50vw - 175px);
    background: #8B4513;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index:3;
    font-family: 'Secular One', sans-serif;
`;

export const Body = styled.div`
    width: 300px;
    line-height: 20px;
    height: 82px;
    font-size: 18px;
    text-align: center;
    color: #EEE8AA;
`;

export const Footer = styled.div`
    & > button {
        font-family: 'Secular One', sans-serif;
    }
`;

export const CancelButton = styled.button`
    width: 134px;
    height: 37px;
    left: 572px;
    top: 508px;
    background-color: rgb(255,215,0);
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    color: #8B4513;
    cursor: pointer;
    margin-right: 27px;
    border: none;
`;

export const GoButton = styled.button`
    width: 134px;
    height: 37px;
    left: 733px;
    top: 509px;
    background-color: #8B4513;
    border-radius: 5px;
    border: 2px solid rgb(255,215,0);
    font-size: 18px;
    line-height: 22px;
    color: rgb(255,215,0);
    cursor: pointer;
`;