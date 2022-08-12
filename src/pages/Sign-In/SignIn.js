import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, LogInBar, Form, Input, Button, StyledLink } from "./style"
import requests from "../../services/requests";

function SignInScreen() {
    const navigate = useNavigate();

    const [user, setUser] = useState({ email: "", password: "" });
    const [logginIn, setLogginIn] = useState(false);

    async function LogIn (ev) {
        ev.preventDefault();
        setLogginIn(true);
        if (user.email === "" || user.password === "") {
            alert("Preencha os campos");
            setLogginIn(false);
            return;
        }
        try {
            await requests.signIn(user);
            navigate("/");

        } catch (error) {
            if (error.response.status === 401) {
                alert("Email ou senha incorretos");
                setLogginIn(false);
                return;
            }
            if (error.response.status === 422) {
                alert("Verifique se escreveu os dados corretamente");
                setLogginIn(false);
                return;
            }
            alert("Algo deu errado, tente novamente mais tarde");
            setLogginIn(false);
        }

    }

    return (
        <Container>
            <LogInBar>
                <Form onSubmit={ev => LogIn(ev)}>
                    <Input placeholder="E-mail" value={user.email} type="email" onChange={ev => setUser({ ...user, email: ev.target.value })}></Input>
                    <Input placeholder="Senha" value={user.password} type="password" onChange={ev => setUser({ ...user, password: ev.target.value })}></Input>
                    <Button isDisabled={logginIn} disabled={logginIn} type="submit">Log In</Button>
                </Form>
                <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
            </LogInBar>
        </Container>

    )
}

export default SignInScreen;


