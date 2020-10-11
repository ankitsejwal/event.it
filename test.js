function animateEventName(eventName) {
    let string = '';

    for (let x = 0; x < eventName.length; x++) {
        string = string + eventName[x];
        console.log(string);
        pause(40);
        // setTimeout(function (x) {
        //     console.log(string);
        // }, 40 * x);
    }
}

function pause(milliseconds) {
    var dt = new Date();
    while (new Date() - dt <= milliseconds) {
        /* Do nothing */
    }
}

animateEventName('Apple 12 October 2020 Event');
