import React from "react";
import Button from "../Button"
import "./style.css"

class Field extends React.Component{
    constructor(props){
        super(props)
        this.state = {email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.type]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(event.name);
    }  
   
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Email" className="field" type="email" value={this.state.email} onChange={this.handleChange} />
                <input placeholder="Password" className="field" type="password" value={this.state.password} onChange={this.handleChange} />
                <Button type="submit" name={this.props.name}/>
            </form>
        );
    }
}

export default Field;