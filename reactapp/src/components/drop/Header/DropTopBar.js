import React from "react";
import logo from "../../../img/logo.svg";

import ApiKeyContainer from "./ApiKeyContainer";

var DropTopBar = (props) => {
    return (
        <div className="app-header">
            {/* <TopBarNavigation />
            <div className="logo" tabIndex="1" ></div> */}
            <div className="logo"><img src={logo} alt="Logo" height="90" /></div>
            <ApiKeyContainer {...props} />
        </div>
    );
}

export default DropTopBar;