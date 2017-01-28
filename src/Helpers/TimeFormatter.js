import Moment from 'moment';

function TimeFormatter(timeInSeconds) {
    var time = Moment.duration(timeInSeconds, 'seconds');
    var hours = time.hours();
    var minutes = time.minutes();
    var seconds = time.seconds();
    var renderedTime = "";
    if (hours) {
        renderedTime += hours + "h ";
    }
    if (minutes) {
        renderedTime += minutes + "m ";
    }
    return renderedTime + seconds + "s";
}

export default TimeFormatter;