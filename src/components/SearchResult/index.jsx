import React from "react";
import "./style.css"
import Picture from "../Picture"

function SearchResult(props) {
    return(
        <img className="result_img" src={props.src} alt={props.alt} />
    )
}

export default SearchResult