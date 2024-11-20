const dayEl = document.getElementById("day");
const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown(); /* Start when page is loaded */

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;

    /* Date is in milliseconds */
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const rem_days = Math.floor(gap/days);
    const rem_hours = Math.floor((gap%days)/hours); /* What remains after removing the days is the hours */
    const rem_minutes = Math.floor((gap%hours)/minutes); /* What remains after removing the hours is the minutes */
    const rem_seconds = Math.floor((gap%minutes)/seconds); /* What remains after removing the minutes is the seconds */


    dayEl.innerText = rem_days;
    hoursEl.innerText = rem_hours;
    minutesEl.innerText = rem_minutes;
    secondsEl.innerText = rem_seconds;

    setTimeout(updateCountdown,1000);
}