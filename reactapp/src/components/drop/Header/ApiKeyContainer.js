import React, { useState } from "react";
import ValidationError from "../../shared/ValidationError";
import { CSSTransition } from 'react-transition-group';

var ApiKeyContainer = ({ apiKey, setApiKey, usePublicKey, setUsePublicKey }) => {
  var [validationError, setValidationError] = useState("");

  var onChange = event => {
    if (event.target.value === "") {
      setValidationError("You must provide a key.");
    }
    else {
      setValidationError("");
    }

    setApiKey(event.target.value);
  }

  var onToggle = () => {
    if (!usePublicKey)
      setValidationError("");
    
    setUsePublicKey(!usePublicKey);
  }
  
  return (
        <div className="api-key-wrapper">
          <input className="api-key-input" type="text" placeholder="Api Key" onInput={onChange} value={apiKey} disabled={usePublicKey}/>
            <CSSTransition in={validationError !== ""} timeout={300} classNames="validation" unmountOnExit>
              <ValidationError errorMessage={validationError} /> 
            </CSSTransition>
          <label>
            <input className="use-public-api-key-input" type="checkbox" onInput={onToggle} checked={usePublicKey}/> 
            Use Public Key (Rate Limited)
          </label>
          </div>
    );
}

export default ApiKeyContainer;