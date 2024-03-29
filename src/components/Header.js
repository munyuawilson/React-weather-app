import React from "react";
import "./components.css"

function Header(){

    const title="Weather App";

    return <div id="root">
        <h1 className="heading">{title}</h1>
    </div>
}


export default Header;