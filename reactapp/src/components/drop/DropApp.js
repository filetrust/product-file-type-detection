import React, { useState } from "react";
import "../../App.css";
import TopBar from "./Header/DropTopBar";
import Body from "./Body/DropAppBody";

function DropApp() {
  var [apiKey, setApiKey] = useState("");
  var [usePublicKey, setUsePublicKey] = useState(true);

  var onApiKeyChange = event => {
      setApiKey(event.target.value);
  }

  var togglePublicKey = () => {
    setUsePublicKey(!usePublicKey);
  }

    return (
      <>
        <TopBar 
          apiKey={apiKey} 
          setApiKey={setApiKey} 
          usePublicKey={usePublicKey}
           setUsePublicKey={setUsePublicKey} 
           onApiKeyChange={onApiKeyChange} 
           togglePublicKey={togglePublicKey} 
        />
        <Body apiKey={usePublicKey ? "v1j1jXSdPo8Z7iRW4H34va89ho9mt6KV5y9zezVn" : apiKey}/>
      </>
  );
}

export default DropApp;
