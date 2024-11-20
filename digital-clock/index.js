const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    /* If h=8, put a 0 in front so it becomes 08*/
    h = h<10 ? "0" + h : h;
    /* Same for minutes and seconds */
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourElement.innerText = h;
    minutesElement.innerText = m;
    secondsElement.innerText = s;
    ampmElement, (innerText = ampm);
    /* Call updateClock() every 1 seconds */
    setTimeout(()=>{
        updateClock();
    },1000);
}
updateClock();