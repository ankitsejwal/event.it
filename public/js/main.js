const local = document.getElementById('local');
const localTime = document.getElementById('local-time');
const destTime = document.getElementById('dest-time');
const days = document.getElementById('days');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');

// Time where the event is to be held
const eventTime = luxon.DateTime.fromISO('2020-10-14T04:27:00', {
    zone: 'America/Los_Angeles',
});

function clock(eventTime) {
    const time = luxon.DateTime.local()
        .setZone('America/Los_Angeles')
        .toLocaleString(luxon.DateTime.DATETIME_SHORT);

    eventTime = eventTime.toLocaleString(luxon.DateTime.DATETIME_SHORT);

    console.log(time);
    console.log(eventTime);

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

    days.innerHTML = timeleft.days;
    hours.innerHTML = timeleft.hours;
    minutes.innerHTML = timeleft.minutes;
    seconds.innerHTML = Math.round(timeleft.seconds);

    setTimeout(function () {
        clock(eventTime);
        counter(eventTime);
    }, 1000);
}

counter(eventTime);
