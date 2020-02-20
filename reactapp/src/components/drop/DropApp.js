import React, { useState } from "react";
import "../../App.css";
import TopBar from "./Header/DropTopBar";
import Body from "./Body/DropAndDropBody";

const PublicKey = "v1j1jXSdPo8Z7iRW4H34va89ho9mt6KV5y9zezVn";

function DropApp() {
  var [apiKey, setApiKey] = useState("");
  var [usePublicKey, setUsePublicKey] = useState(true);

    return (
      <>
        <TopBar 
          apiKey={apiKey}
          setApiKey={setApiKey} 
          usePublicKey={usePublicKey}
          setUsePublicKey={setUsePublicKey}
        />
        <Body apiKey={usePublicKey ? PublicKey : apiKey}/>
      </>
  );
}

export default DropApp;
