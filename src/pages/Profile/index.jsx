import React from "react";
import "./style.css"
import FullProfile from "../../components/FullProfile";

function Profile(props) {
    return(
        <FullProfile name="Jane" location="SAN FRANSICO, CA" avatar="https://cdn.pixabay.com/photo/2021/11/10/18/21/woman-6784555_960_720.jpg"/>
    )
}

export default Profile