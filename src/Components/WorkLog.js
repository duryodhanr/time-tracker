import React, { Component } from 'react';
import TimeFormatter from '../Helpers/TimeFormatter.js';
import Moment from 'moment';

class WorkLog extends Component {
  sortLog(itemA, itemB) {
      return itemB.date - itemA.date;
  }
  render() {
    return (
        <div className="work-log">
            <h2>Work Log</h2>
            <div className="log">
                {this.props.log.sort(this.sortLog).map((log, index) => {
                    return (
                    <div className='log-item' key={index}>
                        <div className='log-item-date'>
                            {Moment.unix(log.date).format("dddd, MMMM Do YYYY")}
                        </div>
                        <div className='log-item-description'>
                            {log.description}
                        </div>
                        <div className='log-item-time'>
                            {TimeFormatter(log.secondsElapsed)}
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
  }
}

export default WorkLog;
