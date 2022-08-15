import styled from "styled-components";

export const ParticipantTab = styled.section`
    min-height: 130px;
    width: 240px;
    background-color: #D2691E;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 15px;
`;
export const NameAndTotal = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 240px;
    margin: 5px 0;
`;

export const Name = styled.p`
    margin-left: 10px;
    font-size: 18px;
    font-family: 'Secular One', sans-serif;
`;

export const Total = styled.p`
    margin-right: 10px;
    font-size: 18px;
    font-family: 'Secular One', sans-serif;
    color: rgb(255,215,0);
`;

export const Div = styled.div`
    min-height: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
`;