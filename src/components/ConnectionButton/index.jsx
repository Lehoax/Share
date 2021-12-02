import React from "react";
import "./style.css"

function ConnectionButton(props) {
    return(<button className={props.type_of_connection}>{props.type_of_connection}</button>)
}

export default ConnectionButton;