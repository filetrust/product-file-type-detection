import React from "react";
import Modal from "../Modal";
import AboutModalModalHeader from "./AboutModalModalHeader.jsx";
import AboutModalBody from "./AboutModalBody.jsx";
import AboutModalModalCloseButton from "./AboutModalModalCloseButton.jsx";

var AboutModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} onClickInside={() => { }}
            onClickOutside={props.onCloseAction} modalType="about"
            actions={false} onExitCallback={}
        >
            <AboutModalModalHeader />
                <AboutModalBody />
            <AboutModalModalCloseButton onClick={props.onCloseAction} />
        </Modal>
    )
}