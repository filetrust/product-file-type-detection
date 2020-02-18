import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import ClickHandler from "../../Events/ClickHandler.jsx";
import PropTypes from "prop-types";
const modalRoot = document.querySelector("#modalRoot");

function ModalContents(props) {
    return (
        <div className={`modal-overlay ${props.modalType}-modal`}>
            <ClickHandler onClickInside={props.onClickInside} onClickOutside={props.onClickOutside}>
                <section className={`modal-container ${props.actions ? "actions" : ""}`}>{props.children}</section>
            </ClickHandler>
        </div>);
}

function Modal(props) {
    return ReactDOM.createPortal(
        <CSSTransition in={props.isOpen} classNames="modal" timeout={props.transitionTimeout} unmountOnExit onExited={props.onExitCallback}>
            <React.Fragment>
                {<ModalContents {...props} onClickInside={props.onClickInside} onClickOutside={props.onClickOutside} />}
            </React.Fragment>
        </CSSTransition>,
        modalRoot);
}

Modal.defaultProps = {
    onClickInside: () => { },
    onClickOutside: () => { },
    onExitCallback: () => { },
    transitionTimeout: 300
};

Modal.propTypes = {
    modalType: PropTypes.string,
    isOpen: PropTypes.bool,
    onClickInside: PropTypes.func,
    onClickOutside: PropTypes.func,
    onExitCallback: PropTypes.func,
    transitionTimeout: PropTypes.number
};

export default Modal;