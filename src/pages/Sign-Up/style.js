import styled from "styled-components";

export const CointainerSignUp = styled.main`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Inputs = styled.div`
    box-sizing: border-box;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 535px;
    height: 100vh;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 429px;
    margin-top: 30vh;
    @media (max-width: 900px) {
        margin-top: 40px;
    }
`;

export const Input = styled.input`
    padding-left: 15px;
    width: 429px;
    height: 65px;
    border-radius: 6px;
    margin-bottom: 13px;
    font-size: 27px;
    line-height: 40px;
    border: none;
    @media (max-width: 900px) {
        width: 330px;
        height: 55px;
    }
`;

export const Button = styled.button`
    width: 429px;
    height: 65px;
    border-radius: 6px;
    background-color:  #1877F2;
    border: none;
    margin-bottom: 22px;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #ffff;
    font-weight: 700;
    &:hover {
        cursor: ${({ isDisabled }) => isDisabled ? "default" : "pointer"};
    }
    opacity: ${({ isDisabled }) => isDisabled ? "0.7" : "1"};
    @media (max-width: 900px) {
        width: 330px;
        height: 55px;
    }
`;

export const StyledLink = styled.link`
    color: #ffff;
    font-size: 20px;
    line-height: 24px;
    text-decoration: underline;
    @media (max-width: 900px) {
        font-size: 17px;
        line-height: 20px;
    }
`;