import React from "react";

function ValidationError(props) {

    return (
        <span className="input-validation validation-popup">
            {props.errorMessage}
        </span>
    );
}

export default ValidationError;