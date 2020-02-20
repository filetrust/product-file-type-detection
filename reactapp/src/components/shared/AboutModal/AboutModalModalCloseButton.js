import React from "react";

function AboutModalModalCloseButton(props) {
    return <button onClick={props.onClick} tabIndex="-1" type="button" className="modal-close-button close-modal"></button>;
}

export default AboutModalModalCloseButton;