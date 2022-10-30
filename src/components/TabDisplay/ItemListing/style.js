import styled from "styled-components";

export const Div = styled.div`
    height: 20px;
    display: flex;
    flex-wrap: wrap;
`;

export const ItemAmount = styled.p`
    color: #20B2AA;
    margin-left: 10px;
    width: 25px;
`;

export const ItemName = styled.p`
    padding-left: 5px;
    color: #2F4F4F;
    width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const ItemTotal = styled.p`
    color: #359c35;
    width: 80px;
    padding-left: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;