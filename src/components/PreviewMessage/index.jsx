import React from "react";
import "./style.css"

function PreviewMessage(props) {
    return(
    <div className="previewMessage">
        <img className="avatarMessage" src={props.avatar} alt={props.name} />
        <div className="leftMessage">
            <h4 className="lastMessageTitle">{props.name}</h4>
            <p className="lastMessage">{props.last_message}</p>
        </div>
    </div>
    )
}

export default PreviewMessage;