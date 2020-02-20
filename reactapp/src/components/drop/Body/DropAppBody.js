import React from "react";
import ProcessFile from "./ProcessFile";

var DropAppBody = ({ apiKey }) => {
    return (
        <div className="app filedrop">
          <ProcessFile apiKey={apiKey}/>
        </div> 
    );
}

export default DropAppBody;