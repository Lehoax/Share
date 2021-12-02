import React from "react";
import ConnectionButton from '../../components/ConnectionButton';
import ShortProfile from '../../components/ShortProfile';
import share from "../../assets/imgs/2901214.png"
import "./style.css"

function LoginOrRegister(props) {
    return(
        <div>
            <div className="login_or_register">
                <div className="center_page">
                   <img className="logo_app" src={share} />
                    <h2 className="title_app">share</h2>
                </div>
                <div id="margin">
                    <ShortProfile name="Pawel Czerwinski" pseudo="@pawel_czerwinski" picture_link="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg"/>
                </div>
            </div>
            <div className="buttons">
                <a href='/login'><ConnectionButton type_of_connection="LOGIN" /></a>
                <a href='/register'><ConnectionButton type_of_connection="REGISTER"/></a>
            </div> 
        </div>
    )
}

export default LoginOrRegister;