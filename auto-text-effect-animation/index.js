const containerElement = document.querySelector(".container"); //Selector for the class

const careers = ["Software Developer",
                "Gamer",
                "Truck Driver",
                "Best Boyfriend"];

let careerIndex = 0;

let characterIndex = 0;

updateText();
function updateText(){
    characterIndex++;
    containerElement.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText,100)
}