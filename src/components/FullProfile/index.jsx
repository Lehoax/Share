import React from "react";
import "./style.css"
import Button from "../Button"

function FullProfile(props) {
    return(
        <div className="FullProfile">
            <img className="FullProfileAvatar" src={props.avatar} alt={props.avatar} />
            <h1>{props.name}</h1>
            <h3 className="FullProfileLocation">{props.location}</h3>
            <div className="FullProfileBtn">
                <Button  name={"FOLLOW "+props.name} color="black"/>
            </div>
            <div className="FullProfileBtn">
                <Button name={"MESSAGE"} color="white"/>
            </div>
        </div>
    )
}

export default FullProfile;