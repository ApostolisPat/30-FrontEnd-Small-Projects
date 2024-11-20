const btnElement = document.querySelector(".btn");

/* Event holds the coordinates of the mouse */
btnElement.addEventListener("mouseover",(event)=>{
    const x = event.pageX - btnElement.offsetLeft;
    const y = event.pageY - btnElement.offsetTop;

    btnElement.style.setProperty("--xPos", x + "px");
    btnElement.style.setProperty("--yPos", y + "px");

})