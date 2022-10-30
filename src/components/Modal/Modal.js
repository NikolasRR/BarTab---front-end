import { useContext, useState } from "react";
import requests from "../../services/API/requests";

import ModalContext from "../../contexts/modalContext";

import { useNavigate } from "react-router-dom";

import { ModalBackground, ModalContainer, Body, Footer, CancelButton, GoButton } from "./style"

function Modal({ submit, data, tableId, errorHandler }) {
    const { setIsModalOpen, modalType, errorMessage } = useContext(ModalContext);
	const navigate = useNavigate();

    async function submit(id, data) {
		try {
			await requests.postItems(id, data);
            setIsModalOpen(false);
			navigate("/tab");
		} catch (error) {
            console.log("checkpoint");
			errorHandler(error.response.data);
		}
	}
    
    const checkMode = modalType === "check";
    const errorMode = modalType === "error";

    return (
        <ModalBackground>
            <ModalContainer>
                <Body>
                    {
                        checkMode &&
                        <>Make sure everything is ok.{<br />}You won't be able to change it afterwards!</>
                    }
                    {
                        errorMode &&
                        (errorMessage ? errorMessage : "something went wrong")
                    }
                </Body>
                <Footer>
                    {
                        checkMode &&
                        <>
                            <CancelButton onClick={() => setIsModalOpen(false)}>check again</CancelButton>
                            <GoButton onClick={() => submit(tableId, data) }>all good!</GoButton>
                        </>
                    }
                    {
                        errorMode &&
                        <CancelButton alone={true} onClick={() => setIsModalOpen(false)}>ok</CancelButton>
                    }
                </Footer>
            </ModalContainer>
        </ModalBackground >
    );
}

export default Modal;