import React from "react";
import "./style.css"

function ShortProfile(props) {
    return(
        <div className="short_profile_a">
            <img className="profile_picture_small" src={props.picture_link} alt={props.picture_link}/>
            <div>
                <h4 className="title_short_profile">{props.name}</h4>
                <p className="pseudo_short_profile">{props.pseudo}</p>
            </div>
        </div>
    )
}

export default ShortProfile;