import React from "react";
import Button from "../Button"
import "./style.css"

class Field extends React.Component{
    constructor(props){
        super(props)
        this.state = {email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.type]: event.target.value});
    }
    

   
    render(){
        return(
            <form>
                <input placeholder="Email" className="field" type="email" value={this.state.email} onChange={this.handleChange} />
                <input placeholder="Password" className="field" type="password" value={this.state.password} onChange={this.handleChange} />
                <a href="http://localhost:3000/discover"><Button name={this.props.name} type="button"/></a>
            </form>
        );
    }
}

export default Field;