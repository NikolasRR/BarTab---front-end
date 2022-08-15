import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calC(100% - 100px);
    background-color: #EEE8AA;
`;

export const Instruction = styled.p`
    font-family: 'Secular One', sans-serif;
    color: #F95636;
    font-size: 20px;
    width: 250px;
    text-align: center;
    margin: 20px 0;
`;

export const RunDown = styled.section`
    height: calc(100vh - 160px);
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F0E68C;
`;


export const PerParticipant = styled.section`
    height: 260px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: scroll;
    border-radius: 20px;
`;

export const FullTable = styled.section`
    min-height: 60px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: scroll;
`;

export const TableItems = styled.div`
    min-height: 40px;
    max-height: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
`;

export const Div = styled.div`
    height: 30px;
    width: 240px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: 'Secular One', sans-serif;
    font-size: 20px;
    margin: 10px 0 0 10px;
`;

export const Total = styled.p`
    padding-left: 5px;
    width: 80px;
`;

export const TotalValue = styled.p`
    color: #B22222;
    width: 140px;
    padding-right: 5px;
    text-align: end;
`;

export const Button = styled.button`
    width: 250px;
    min-height: 40px;
    border: none;
    border-radius: 10px;
    margin: 10px 0;
    font-family: 'Secular One', sans-serif;
    color: rgb(255,215,0);
    background-color: rgb(139,69,19);
    font-size: 15px;
    &:hover {
        cursor: pointer
    }
`;