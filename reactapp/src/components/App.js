import React, { useState } from "react";
import "../App.css";
import ProcessFile from "../components/ProcessFile"
import AppHeader from "./AppHeader";

function App() {
  var [apiKey, setApiKey] = useState("v1j1jXSdPo8Z7iRW4H34va89ho9mt6KV5y9zezVn");

  var onApiKeyChange = event => {
      setApiKey(event.target.value);
  }

    return (
      <>
        <div className="app filedrop">
          <AppHeader />
          <input type="text" placeholder="Api Key" onInput={onApiKeyChange} hidden />
          <ProcessFile apiKey={apiKey}/>
        </div>
      </>
    );
}

export default App;
