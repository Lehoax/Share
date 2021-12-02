import React from "react";
import "./style.css"
import Picture from "../Picture";
import ShortProfile from "../ShortProfile";

function DiscoverComponent(props) {
    return(
        <div>
            <Picture picture_link={props.picture_link} name={props.name} pseudo={props.pseudo} avatar_link={props.avatar_link}/>
            <div className="short_profile_left_margin">
                <ShortProfile name={props.name} pseudo={props.pseudo} picture_link={props.avatar_link}/>
            </div>
        </div>
    )
}

export default DiscoverComponent;