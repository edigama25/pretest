import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LogIn from './components/LogIn'
import Home from './components/Home'
import Menu from './components/Menu'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

export default class App extends Component {

  constructor(){
    super();
    this.state={
      user:{name:'abcd',password:1234},
      posts:[],
      check:false
    };
  }



  checkUser=(name,pass)=>{
    
    if(name == this.state.user.name&&this.state.user.password == pass){
        this.setState({user:this.state.user,posts:this.state.posts,check:true})   
    }
    else{
      alert(':(')
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({user:this.state.user,posts:data,check:this.state.check}));
  }



  render() {
    return (
      <div className='App'>
        <Router>
          <Menu />
          <Switch>
            <Route exact path='/' component={()=>{return <Home posts={this.state.posts} check={this.state.check}/>}} />
            <Route exact path='/login' component={()=>{return <LogIn checkUser={this.checkUser}/>}} />
          </Switch>
        </Router>
      </div>
    )
  }
}