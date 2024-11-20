const containerElement = document.querySelector(".container");
const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");

leftDiv.addEventListener("mouseenter",()=>{
    containerElement.classList.add("active-left");
});

rightDiv.addEventListener("mouseenter",()=>{
    containerElement.classList.add("active-right");
});

leftDiv.addEventListener("mouseleave",()=>{
    containerElement.classList.remove("active-left");
});

rightDiv.addEventListener("mouseleave",()=>{
    containerElement.classList.remove("active-right");
});