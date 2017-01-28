import React, { Component } from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeId: '',
      password: ''
    }
  }

  doLogin() {
    this.props.onLogin(this.state.employeeId, this.state.password);
  }

  render() {
    return (
      <div className="login">
        <Input 
          placeholder="Employee ID Number..."
          value={this.state.employeeId} 
          onChange={(e)=>this.setState({employeeId: e.target.value})} 
          />
        <Input 
          placeholder="Password..."
          value={this.state.password} 
          type="password"
          onChange={(e)=>this.setState({password: e.target.value})} 
          />
        <Button 
          onClick={(e)=>this.doLogin()}
          text="Login"
          />
      </div>
    );
  }
}

export default Login;
