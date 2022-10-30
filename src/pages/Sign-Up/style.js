import { Link } from "react-router-dom";
import styled from "styled-components";

export const CointainerSignUp = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: calC(100vh - 90px);
    background-color: #EEE8AA;
`;

export const Inputs = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 250px;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 250px;
    margin-top: 60px;
`;

export const Input = styled.input`
    padding-left: 15px;
    width: 250px;
    height: 65px;
    border-radius: 6px;
    margin-bottom: 13px;
    font-size: 17px;
    line-height: 40px;
    border: none;
    font-family: 'Secular One', sans-serif;
`;

export const Button = styled.button`
    width: 250px;
    height: 65px;
    border-radius: 6px;
    background-color: rgb(139,69,19);
    border: none;
    margin-bottom: 22px;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: rgb(255,215,0);
    font-weight: 700;
    font-family: 'Secular One', sans-serif;
    &:hover {
        cursor: ${({ isDisabled }) => isDisabled ? "default" : "pointer"};
    }
    opacity: ${({ isDisabled }) => isDisabled ? "0.7" : "1"};
`;

export const StyledLink = styled(Link)`
    color: #F95636;
    font-size: 15px;
    line-height: 24px;
    text-decoration: underline;
    font-family: 'Secular One', sans-serif;
`;