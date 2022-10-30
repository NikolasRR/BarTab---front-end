import styled from "styled-components";

export const ParticipantTab = styled.section`
    width: 240px;
    background-color: #F0E68C;
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
    width: 140px;
    font-family: 'Secular One', sans-serif;
    color: #191970;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const Total = styled.p`
    margin-right: 10px;
    font-size: 18px;
    font-family: 'Secular One', sans-serif;
    color: 	#666600;
`;

export const Div = styled.div`
    min-height: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
`;