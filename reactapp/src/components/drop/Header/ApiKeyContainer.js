import React from "react";

var ApiKeyContainer = ({ onApiKeyChange, apiKey, usePublicKey, togglePublicKey }) => {
    return (
        <div className="api-key-wrapper">
          <input className="api-key-input" type="text" placeholder="Api Key" onInput={onApiKeyChange} value={apiKey} disabled={usePublicKey}/>
          <label>
            <input className="use-public-api-key-input" type="checkbox" onInput={togglePublicKey} checked={usePublicKey}/> 
            Use Public Key (Rate Limited)
          </label>
          </div>
    );
}

export default ApiKeyContainer;