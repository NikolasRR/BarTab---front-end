import styled from "styled-components";

export const Logo = styled.header`
    height: 70px;
    width: 100%;
    background-color: rgb(139,69,19);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Righteous', cursive;
    font-size: 50px;
    color: rgb(255,215,0);
`;

export const Current = styled.section`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D2691E;
`;

export const Options = styled.div`
    height: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 250px;
`;

export const TableName = styled.p`
    font-size: 15px;
    font-family: 'Secular One', sans-serif;
    display: flex;
    align-items: center;
    color: #F0E68C;
`;

export const Logout = styled.button`
    background-color: #F0E68C;
    color: #2F435A;
    height: 18px;
    font-family: 'Secular One', sans-serif;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

export const NewTable = styled.button`
    background-color: #F0E68C;
    color: #2F435A;
    height: 18px;
    font-family: 'Secular One', sans-serif;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;