import React from "react";
import "./style.css"

function Search(params) {
    return(
        <div>
            <h1 id="search_title" className="title_align">Search</h1>
            <input className="search_bar" type="text" defaultValue="Not available"/>
        </div>
    )
}

export default Search;