import Moment from 'moment';

class TimeFormatter {
  static fromSeconds( timeInSeconds ) {
    var time = Moment.duration( timeInSeconds, 'seconds' );
    var hours = time.hours();
    var minutes = time.minutes();
    var seconds = time.seconds();
    var renderedTime = "";
    if ( hours ) {
      renderedTime += hours + "h ";
    }
    if ( minutes ) {
      renderedTime += minutes + "m ";
    }
    return renderedTime + seconds + "s";
  }

  static toSeconds( string ) {
    var regex = new RegExp( /(([0-9]+)h)?\s?(([0-9]+)m)?\s?(([0-9]+)s)?/ );
    var time = string.match( regex );
    if ( time === undefined ) {
      return 0;
    }
    var totalSeconds = 0;
    var hours = time[ 2 ];
    var minutes = time[ 4 ];
    var seconds = time[ 6 ];
    if ( hours !== undefined ) {
      totalSeconds += (hours * 60 * 60);
    }
    if ( minutes !== undefined ) {
      totalSeconds += (minutes * 60);
    }
    if ( seconds !== undefined ) {
      totalSeconds += seconds;
    }
    return totalSeconds;
  }
}

export default TimeFormatter;
