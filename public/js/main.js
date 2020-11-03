const local = document.getElementById('local');
const localTime = document.getElementById('local-time');
const destTime = document.getElementById('dest-time');
const days = document.getElementById('days');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');

const timezone = 'America/Los_Angeles';

// Time where the event is to be held
const eventTime = luxon.DateTime.fromISO('2020-11-10T10:00:00', {
    zone: timezone,
});

function clock(eventTime) {
    const time = luxon.DateTime.local()
        .setZone(timezone)
        .toLocaleString(luxon.DateTime.DATETIME_SHORT);

    eventTime = eventTime.toLocaleString(luxon.DateTime.DATETIME_SHORT);

    localTime.innerHTML = time;
    destTime.innerHTML = eventTime;
}

function counter(eventTime) {
    // current time where the event is to be held
    const currentTime = luxon.DateTime.local().setZone('America/Los_Angeles');

    // Getting the difference in time
    const timeleft = eventTime
        .diff(currentTime, ['days', 'hours', 'minutes', 'seconds'])
        .toObject();

    console.log(timeleft);

    let timer = {
        days: ('0' + timeleft.days).slice(-2),
        hours: ('0' + timeleft.hours).slice(-2),
        minutes: ('0' + timeleft.minutes).slice(-2),
        seconds: ('0' + Math.round(timeleft.seconds)).slice(-2),
    };

    // stop counter from printing -ve numbers
    if (timeleft.seconds < 0) {
        timer = {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        };
    }

    days.innerHTML = timer.days;
    hours.innerHTML = timer.hours;
    minutes.innerHTML = timer.minutes;
    seconds.innerHTML = timer.seconds;

    setTimeout(function () {
        clock(eventTime);
        counter(eventTime);
    }, 1000);
}

counter(eventTime);
