const event = document.querySelector('#event-name');
const eventName = event.innerHTML;
const eventArray = eventName.split('');
event.innerHTML = '';

for (letter of eventArray) {
    event.innerHTML += `<span>${letter}</span>`;
}

// select all spans
const spans = document.querySelectorAll('#event-name span');

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    spans[char].classList.add('fade');
    char++;
    if (char === spans.length) {
        clearInterval(timer);
        timer = null;
        return;
    }
}
