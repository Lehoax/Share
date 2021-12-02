import React from "react";
import "./style.css"
import DiscoverComponent from "../../components/DiscoverComponent";

function Discover(props) {
    return(
        <div className="discover">
            <h1 id="discover_title" className="title_align">Discover</h1>
            <h4 className="title_align">WHAT'S NEW TODAY</h4>
            <DiscoverComponent name="Simon Zhu" pseudo="@smnezhu" avatar_link="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg" picture_link="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"/>
            <DiscoverComponent name="Zella Spitzer" pseudo="@ZellaSpi" avatar_link="https://cdn.pixabay.com/photo/2021/11/05/20/41/woman-6771981_960_720.jpg" picture_link="https://cdn.pixabay.com/photo/2020/02/09/20/42/marriage-proposal-4834488_960_720.jpg"/>
            <DiscoverComponent name="Javier C. Williams" pseudo="@JavieC" avatar_link="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_960_720.jpg" picture_link="https://cdn.pixabay.com/photo/2021/11/11/09/12/lighthouse-6785763_960_720.jpg"/>
            <DiscoverComponent name="Mary Canne" pseudo="@aMarryCanne" avatar_link="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg" picture_link="https://cdn.pixabay.com/photo/2017/08/06/11/26/flamingo-2591522_960_720.jpg"/>
        </div>
    )
}

export default Discover;