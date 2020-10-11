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

function pause(milliseconds) {
    var dt = new Date();
    while (new Date() - dt <= milliseconds) {
        /* Do nothing */
    }
}

function animateEventName() {
    let eventName = document.getElementById('event-name');
    eventText = eventName.textContent;
    let splitName = eventText.split('');
    eventName.innerHTML = '';

    console.log(splitName);

    for (let x = 0; x < splitName.length; x++) {
        eventName.innerHTML += '<span>' + splitName[x] + '</span>';
    }

    const char = 0;
    const timer = setInterval(onTick, 50);

    function onTick() {
        const span = eventName.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if (char === splitName.length) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }
}

animateEventName();
