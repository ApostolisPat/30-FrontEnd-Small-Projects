
const containerElement = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colourContainerElement = document.createElement("div");
    colourContainerElement.classList.add("colour-container");
    containerElement.appendChild(colourContainerElement);
    let colour = randomColour();
    colour = "#" + colour;
    colourContainerElement.innerText = colour;
    colourContainerElement.style.backgroundColor = colour;
}


function randomColour(){
    const chars = "0123456789abcdef";
    const colourCodeLength = 6;
    let colour = "";

    for (let index = 0; index < colourCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        
        colour += chars.substring(randomNum, randomNum+1);
        
    }
    return colour;

}