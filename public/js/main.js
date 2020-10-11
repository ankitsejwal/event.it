const local = document.getElementById('local');

function clock() {
    // get todays date
    const date = new Date();
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000; // millisecond
    const utc = localTime + localOffset; // time in utc

    const destinationOffset = -7; // pdt
    let destinationTime = utc + destinationOffset * 3600000;
    destinationTime = new Date(destinationTime);

    // console.log('local time: ' + localTime);
    // console.log('Timezone Offset: ' + localOffset);
    // console.log('utc: ' + utc);
    // console.log(destinationTime.toLocaleString());

    document.getElementById('local-time').innerHTML = date.toLocaleString();
    document.getElementById(
        'dest-time'
    ).innerHTML = destinationTime.toLocaleString();
}

function counter() {
    const days = document.getElementById('days');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const seconds = document.getElementById('seconds');
    const date = new Date();

    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();

    setTimeout(function () {
        clock();
        counter();
    }, 1000);
}

counter();
