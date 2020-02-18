import React from "react";
import TopBar from "./TopBar.js";

var Layout = ({ children }) => {
    return (
        <>
            <TopBar />
            {children}
        </>);
}

export default Layout;