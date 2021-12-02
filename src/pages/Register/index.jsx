import React from "react";
import "./style.css"

function Register(props) {
    return(
        <div>
            <h1 id="register_title">Register</h1>
            <input placeholder="Pseudo" className="field" type="text" />
            <a href="/registertwo"><button className="button black">NEXT</button></a>
        </div>
    )
}

export default Register;