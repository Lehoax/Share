import React from "react";
import "./style.css";
import PreviewMessage from "../../components/PreviewMessage";

function Message(props) {
    return(
        <div>
        <h2 id="message_title" >Chats</h2>
        <PreviewMessage name="James" avatar="https://cdn.pixabay.com/photo/2014/09/17/11/47/man-449404_960_720.jpg" last_message="Thank you! That was very helpful!"/>
        <PreviewMessage name="Laure" avatar="https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_960_720.jpg" last_message="I know... I’m trying to get the funds."/>

        </div>
    )
}

export default Message