import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { CointainerSignUp, Inputs, Form, Input, Button, StyledLink } from "./style";
import Modal from "../../components/Modal/Modal";

import ModalContext from "../../contexts/modalContext";
import requests from "../../services/API/requests";

function SignUp() {
    const [isloading, setIsLoading] = useState(false);
    const [user, setUser] = useState({ name: "", password: "", email: "" });

    const { isModalOpen, setModalType, setErrorMessage, setIsModalOpen } = useContext(ModalContext);

    const navigate = useNavigate();

    function handleError(message) {
        setModalType("error");
        setErrorMessage(message);
        setIsModalOpen(true);
    }

    async function handleRegister(e) {
        e.preventDefault();
        setIsLoading(true);
        if (user.password.length < 4 || user.name.length < 3 || user.email === "") {
            handleError(`email, name and password are required. Name length at least 3 and password length at least 4`);
            setIsLoading(false);
            return;
        }
        try {
            await requests.signUp(user);
            navigate("/sign-in");
        } catch (error) {
            handleError(error.response.data);
            setIsLoading(false);
        }
    }

    return (
        <>
            {
				isModalOpen &&
				<Modal />
			}
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