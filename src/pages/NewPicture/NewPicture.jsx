import React, { Component }  from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './style.css'


class NewPicture extends React.Component{
    constructor(props){
        super(props);
        
    }
  
    render(){
  
        return <div>
            <Camera isFullscreen="true"/>
        </div>
    }
}

export default NewPicture