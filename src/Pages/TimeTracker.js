import React, { Component } from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import WorkLog from '../Components/WorkLog.js';
import Timer from '../Components/Timer.js';
import './TimeTracker.css';

class TimeTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      timeElapsed: 0
    }
  }

  tick() {
    this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 1
    }));
  }

  onLogWork() {
    this.props.onLogWork(this.state.timeElapsed, this.state.description);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      timeElapsed: 0,
      description: ""
    });
  }

  render() {
    return (
      <div className="time-tracker">
        <Timer tick={this.tick.bind(this)} timeElapsed={this.state.timeElapsed}/>
        <Input 
          placeholder="Description of your task..."
          value={this.state.description} 
          onChange={(e)=>this.setState({description: e.target.value})} 
          />
          <div className="actions">
            <Button onClick={this.onLogWork.bind(this)} text="Log Work"/>
            <Button onClick={this.resetForm.bind(this)} text="Reset Form"/>
            <Button onClick={this.props.onLogout} text="Logout"/>
          </div>
        <WorkLog log={this.props.log}/>
      </div>
    );
  }
}

export default TimeTracker;
