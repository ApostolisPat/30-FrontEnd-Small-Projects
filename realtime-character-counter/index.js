const totalCounterElement = document.getElementById("total-counter")
const remainingCounterElement = document.getElementById("remaining-counter");
const textAreaElement = document.getElementById("textarea");



textAreaElement.addEventListener("keyup",()=>{
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalCounterElement.innerText = textAreaElement.value.length;
    remainingCounterElement.innerText = textAreaElement.getAttribute("maxLength") - textAreaElement.value.length;
}



/* let max=50;
let remaining=10;
let current=0;
textAreaElement.addEventListener("keyup",()=>{
    updateCounter();
});

function updateCounter(){
    if(current!=max){
        current++;
        remaining = max - current;
        totalCounterElement.innerHTML = current;
        remainingCounterElement.innerHTML = remaining;
    }else{
        current=10;
        remaining=0;
    }
} */


