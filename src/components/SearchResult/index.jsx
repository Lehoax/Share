import React from "react";
import "./style.css"

function SearchResult(props) {
    return(
        <img className="result_img" src={props.src} alt={props.alt} />
    )
}

export default SearchResult