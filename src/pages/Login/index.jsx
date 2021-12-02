import React from "react";
import Field from "../../components/Fied";
import "./style.css"

function Login(props) {
    return(
        <div>
            <h1 id="login_title">Login</h1>
            <Field name="login"  button_name="LOGIN"/>
        </div>
    )
}

export default Login