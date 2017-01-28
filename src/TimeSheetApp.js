import React, { Component } from 'react';
import Login from './Pages/Login.js';
import TimeTracker from './Pages/TimeTracker.js';
import Moment from 'moment';
import './TimeSheetApp.css';

class TimeSheetApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      employeeData: {}
    }
  }
  login(employeeId, password) {
    /*
      Authenticate employeeId & password via AJAX
      and retrieve historic employeeData
    */
    var historicEmployeeData = {
        id: 8768,
        log: [
          {
            date: 1485129710,
            secondsElapsed: 1200,
            description: "Client Meeting",
          },{
            date: 1485128710,
            secondsElapsed: 2555,
            description: "Learnt Redux",
          },{
            date: 1485119710,
            secondsElapsed: 600,
            description: "Lunch",
          }
        ]
    };
    this.setState({
      loggedIn: true,
      employeeData: historicEmployeeData
    })
  }
  logout() {
    /**
     * Save todays worklog to server
     */
    this.setState({
      loggedIn: false,
      employeeData: {}
    })
  }

  onLogWork(timeElapsed, description) {
    var data = this.state.employeeData;

    data.log.push({
      date: Moment().unix(),
      description: description,
      secondsElapsed: timeElapsed
    });

    this.setState({
      employeeData: data
    });
  }

  renderPage() {
    if (this.state.loggedIn && this.state.employeeData) {
      return <TimeTracker 
                log={this.state.employeeData.log}
                onLogWork={this.onLogWork.bind(this)} 
                onLogout={this.logout.bind(this)}
                />;
    }
    return <Login onLogin={this.login.bind(this)} />;
  }
  render() {
    return (
      <div className="time-sheet-app">
        <h1>Time Sheet</h1>
        {this.renderPage()}
      </div>
    );
  }
}

export default TimeSheetApp;
