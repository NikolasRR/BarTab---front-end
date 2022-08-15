import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { CointainerSignUp, Inputs, Form, Input, Button, StyledLink } from "./style";
import requests from "../../services/API/requests";

function SignUp() {
    const [isloading, setIsLoading] = useState(false);
    const [user, setUser] = useState({ name: "", password: "", email: "" });

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
                        <Input type="text" placeholder="first name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                        <Button isDisabled={isloading} disabled={isloading} type="submit">sign up</Button>
                    </Form>
                    <StyledLink to="/sign-in">already registered? sign in</StyledLink>
                </Inputs>
            </CointainerSignUp>
        </>
    )
}

export default SignUp;