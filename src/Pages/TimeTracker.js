import React, { Component } from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import WorkLog from '../Components/WorkLog.js';
import Timer from '../Helpers/Timer.js';
import TimeFormatter from '../Helpers/TimeFormatter.js';
import './TimeTracker.scss';

class TimeTracker extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      description: '',
      elapsed: 0,
      enteringCustomTime: false,
      customTimeString: ""
    };
    this.timer = new Timer( this.tick.bind( this ) );
  }

  componentDidMount() {
    this.timer.start();
  }

  componentWillUnmount() {
    this.timer.stop();
  }

  onLogWork() {
    this.props.onLogWork( this.timer.getElapsed(), this.state.description );
    this.resetForm();
  }

  tick( elapsed ) {
    this.setState( {
      elapsed: elapsed
    } )
  }

  onTimerClick( e ) {
    e.stopPropagation();
    if ( this.state.enteringCustomTime ) {
      this.onSubmitCustomTime();
    } else {
      this.onCancelCustomTime();
    }
  }

  onCustomTimeInputChange( e ) {
    this.setState( {
      customTimeString: e.target.value
    } )
  }

  onCancelCustomTime() {
    this.timer.stop();
    this.setState( {
      enteringCustomTime: true
    } );
  }

  onSubmitCustomTime() {
    var newElapsedTime = TimeFormatter.toSeconds( this.state.customTimeString );
    if ( parseInt( newElapsedTime, 10 ) < 1 ) {
      newElapsedTime = this.state.elapsed;
    }
    this.timer.setElapsed( newElapsedTime );
    this.timer.start();
    this.setState( {
      enteringCustomTime: false,
      customTimeString: ""
    } );
  }

  resetForm() {
    this.timer.reset();
    this.setState( {
      description: ""
    } );
  }

  renderTimer() {
    if ( this.state.enteringCustomTime ) {
      return (
      <Input
             className="timer-input"
             autoFocus
             onBlur={ (e) => this.onSubmitCustomTime( e )}
             onKeyDown={ (e) => (e.key === 'Enter' ? this.onSubmitCustomTime( e ) : '') }
             placeholder={ TimeFormatter.fromSeconds( this.state.elapsed ) }
             value={ this.state.customTimeString }
             onChange={ (e) => this.onCustomTimeInputChange( e ) } />
      );
    }
    return TimeFormatter.fromSeconds( this.state.elapsed );
  }

  render() {
    return (
    <div className="time-tracker">
      <div className="timer" title="Click to enter custom time e.g. 1h 30m">
        <span
              className="time-stamp"
              onClick={ (e) => this.onTimerClick( e ) }>{ this.renderTimer() }</span>
      </div>
      <Input
             placeholder="Description of your task..."
             value={ this.state.description }
             onKeyDown={ (e) => (e.key === 'Enter' ? this.onLogWork( e ) : '') }
             onChange={ (e) => this.setState( {
                          description: e.target.value
                        } ) } />
      <div className="actions">
        <Button
                onClick={ this.onLogWork.bind( this ) }
                text="Log Work" />
        <Button
                onClick={ this.resetForm.bind( this ) }
                text="Reset Clock" />
        <Button
                onClick={ this.props.onLogout }
                text="Logout" />
      </div>
      <WorkLog log={ this.props.log } />
    </div>
    );
  }
}

export default TimeTracker;
