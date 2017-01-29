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
            <div className="log">
                {this.props.log.sort(this.sortLog).map((log, index) => {
                    return (
                    <div className='log-item' key={index}>
                        <div className='log-item-row'>
                            <div className='log-item-date'>
                                {Moment.unix(log.date).format("ddd, Do MMM YY")}
                            </div>
                            <div className='log-item-time'>
                                {TimeFormatter.fromSeconds(log.secondsElapsed)}
                            </div>
                        </div>
                        <div className='log-item-row'>
                            <div className='log-item-description'>
                                {log.description}
                            </div>
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
