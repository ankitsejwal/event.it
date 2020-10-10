const { zonedTimeToUtc, utcToZonedTime } = require('date-fns-tz');

const date = new Date();
const currentTimeDest = zonedTimeToUtc(date, 'America/Los_Angeles');
const eventTimeDest = zonedTimeToUtc(
    '12 October 2020 10:00:00',
    'America/Los_Angeles'
);
console.log(currentTimeDest);
console.log(eventTimeDest);
