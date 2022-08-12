import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { CointainerSignUp, Inputs, Form, Input, Button } from "./style";
import requests from "../../services/requests";

function SignUp() {
    const [isloading, setIsLoading] = useState(false);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            await requests.signUp(user);
            navigate("/sign-in");
            
        } catch (error) {
            if (error.response.status === 409) {
                alert("E-mail ou UserName já cadastrado");
                setIsLoading(false);
                return;
            }
            alert("Algo deu errado, tente novamente mais tarde");
            setIsLoading(false);
        }
    }

    return (
        <>
            <CointainerSignUp>
                <Inputs>
                    <Form onSubmit={e => handleRegister(e)}>
                        <Input type="email" placeholder="e-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        <Input type="password" placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        <Input type="text" placeholder="name" value={user.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })} />
                        <Button isDisabled={isloading} disabled={isloading} type="submit">Sign Up</Button>
                    </Form>
                    <StyledLink to="/">Already registered? Sign in</StyledLink>
                </Inputs>
            </CointainerSignUp>
        </>
    )
}

export default SignUp;

const StyledLink = styled(Link)`
    color: #ffff;
    font-size: 20px;
    line-height: 24px;
    text-decoration: underline;
    @media (max-width: 900px) {
        font-size: 17px;
        line-height: 20px;
    }
`;
