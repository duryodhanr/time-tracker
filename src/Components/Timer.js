import React, { Component } from 'react';
import TimeFormatter from '../Helpers/TimeFormatter.js';

class Timer extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.props.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <div className="timer">
          <span className="time-stamp">{TimeFormatter(this.props.timeElapsed)}</span>
        </div>
    );
  }
}

export default Timer;
