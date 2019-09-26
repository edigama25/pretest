import React, { Component } from 'react'

export default class LogIn extends Component {
    
    
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:''
        }

    }
    
    render() {
        return (
            <div>
                <h1>LogIn</h1>
                <input onChange={(val)=>{this.setState({password:this.state.password,name:val.target.value})}} type='text' /><br />
                <input onChange={(e)=>{this.setState({name:this.state.name,password:e.target.value})}} type='password'/><br />
                <button onClick={()=>{this.props.checkUser(this.state.name,this.state.password)}}>enter</button>

            </div>
        )
    }
}