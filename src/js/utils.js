const PORT = 5500;
const API_URL = `http://127.0.0.1:${PORT}`;
let period = 'daily';
let RESPONSE_DATA = null;

function toClassName(title) {
    return title.toLowerCase().split(' ').join('-');
}

function selectPeriod() {
    document.querySelector(`#${period}`).classList.add('selected');
}

function handleOnPeriodClick() {
    document.querySelector('.periods').addEventListener('click', (event) => {
        if (!!event.target.innerText) {
            document.querySelector(`#${period}`).classList.remove('selected');
            period = event.target.innerText.toLowerCase();
            selectPeriod();
            if (RESPONSE_DATA) {
                RESPONSE_DATA.forEach(({title, timeframes}) => {
                    fillInfo(toClassName(title), timeframes);
                });
            }
        }
    });
}

function previousTextByPeriod(period, value) {
    let firstPart;
    switch(period) {
        case 'monthly':
            firstPart = 'Last Month';
            break;
        case 'weekly':
            firstPart =  'Last Week';
            break;
        case 'daily':
        default:
            firstPart = 'Yesterday';
            break;
    }
    return `${firstPart} - ${value}hrs`

}

function fillInfo(className, timeframeValues) {
    const {current, previous} = timeframeValues[period];
    const info = document.querySelector(`.${className}`);
    if (info) {
        const timeDiv = info.getElementsByClassName('time');
        timeDiv[0].innerText = `${current}hrs`;
        const previousDiv = info.getElementsByClassName('previous');
        previousDiv[0].innerText = previousTextByPeriod(period, previous);
    }

}

export function fetchData() {
    fetch(`${API_URL}/data.json`)
        .then(response => response.json())
        .then(json => {
            json.forEach(({title, timeframes}) => {
                fillInfo(toClassName(title), timeframes);
            });
            RESPONSE_DATA = json;
        });
};


window.onload = fetchData();

function init() {
    handleOnPeriodClick();
    selectPeriod();
}

init();