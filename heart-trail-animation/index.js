//Get the body element
const bodyElement = document.querySelector("body")

//Create event listener to detect mouse movement
bodyElement.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanElement = document.createElement("span");
    spanElement.style.left = xPos + "px";
    spanElement.style.top = yPos + "px";

    //To give random size to the span element
    const size = Math.random()*100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);

    //Remove span element after 3 seconds
    setTimeout(()=>{
        spanElement.remove();
    },3000)
})
