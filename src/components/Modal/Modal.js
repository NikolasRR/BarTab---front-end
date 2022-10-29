import { useContext, useState } from "react";

import ModalContext from "../../contexts/modalContext";

import { ModalBackground, ModalContainer, Body, Footer, CancelButton, GoButton } from "./style"

function Modal() {
    const { setIsModalOpen } = useContext(ModalContext)

    return (
        <ModalBackground>
            <ModalContainer>
                <Body>
                    Make sure everything is ok. <br /> You won't be able to change it afterwards!
                </Body>
                <Footer>
                    <CancelButton onClick={() => setIsModalOpen(false)}>check again</CancelButton>
                    <GoButton>all good!</GoButton>
                </Footer>
            </ModalContainer>
        </ModalBackground >
    );
}

export default Modal;