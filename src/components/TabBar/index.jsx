import React from "react";
import "./style.css"
import home from "../../assets/imgs/846449.png"
import search from "../../assets/imgs/2997940.png"
import message from "../../assets/imgs/2462719.png"
import profile from "../../assets/imgs/1077063.png"
import more from "../../assets/imgs/58afdde1829958a978a4a6a6.png"
function TabBar(props) {
    return(
        <nav className="TabBar">
            <a href="/discover"><img className="tab_icon" src={home} alt="https://cdn-icons-png.flaticon.com/512/846/846449.png" /></a>
            <a href="/search"><img className="tab_icon" src={search} alt="https://cdn-icons.flaticon.com/png/512/2997/premium/2997940.png?token=exp=1638387179~hmac=98489dde67dfd7fb009d978d2457486f" /></a>
            <a href="/newPicture" className="tab_icon_center_around"><img className="tab_icon_center" src={more}alt="https://cdn-icons.flaticon.com/png/512/2997/premium/2997933.png?token=exp=1638387361~hmac=2dda82ab78dfd479bd257e9cb3784dd0" /></a>
            <a  href="/message"><img className="tab_icon" src={message} alt="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" /></a>
            <a href="/profile"><img className="tab_icon" src={profile} alt="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" /></a>
        </nav>
    )
}

export default TabBar;