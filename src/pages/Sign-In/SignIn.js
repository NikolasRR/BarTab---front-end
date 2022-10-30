import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { Container, LogInBar, Form, Input, Button, StyledLink } from "./style"
import Modal from "../../components/Modal/Modal";

import requests from "../../services/API/requests";
import ModalContext from "../../contexts/modalContext";

function SignInScreen() {
    const navigate = useNavigate();

    const {isModalOpen, setModalType, setErrorMessage, setIsModalOpen} = useContext(ModalContext);

    const [user, setUser] = useState({ email: "", password: "" });
    const [logginIn, setLogginIn] = useState(false);

    function handleError(message) {
		setModalType("error");
		setErrorMessage(message);
		setIsModalOpen(true);
	}

    async function LogIn(ev) {
        ev.preventDefault();
        setLogginIn(true);
        if (user.email === "" || user.password.length < 4) {
            handleError("email and password of at least 4 characters required");
            setLogginIn(false);
            return;
        }
        try {
            await requests.signIn(user);
            navigate("/");

        } catch (error) {
            handleError(error.response.data);
            setLogginIn(false);
        }
    }

    return (
        <>
            {
				isModalOpen &&
				<Modal />
			}
            <Container>
                <LogInBar>
                    <Form onSubmit={ev => LogIn(ev)}>
                        <Input placeholder="e-mail" value={user.email} type="email" onChange={ev => setUser({ ...user, email: ev.target.value })}></Input>
                        <Input placeholder="password" value={user.password} type="password" onChange={ev => setUser({ ...user, password: ev.target.value })}></Input>
                        <Button isDisabled={logginIn} disabled={logginIn} type="submit">log in</Button>
                    </Form>
                    <StyledLink to="/sign-up">first time? create an account!</StyledLink>
                </LogInBar>
            </Container>
        </>
    )
}

export default SignInScreen;


