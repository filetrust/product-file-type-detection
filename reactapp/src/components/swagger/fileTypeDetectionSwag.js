import React, { useEffect } from "react";
import yam from "../shared/api/api.yaml"; 
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import TopBar from "../shared/TopBar.js";

var FileTypeDetectionSwag = () => {
    useEffect(() => {
		setTimeout(function() {
	  	  document.querySelector(".try-out button").click();		
		  }, 400);		
    });

    return (
        <>
            <TopBar />
            <SwaggerUI url={window.location.origin + yam} docExpansion="full" defaultModelExpandDepth="1"/>
        </>);
}

export default FileTypeDetectionSwag;