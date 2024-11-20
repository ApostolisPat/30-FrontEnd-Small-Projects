const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(bottomContainerEl.offsetTop);
console.log(navbarEl.offsetHeight);


window.addEventListener("scroll", ()=>{
    /* bottomContainerEl.offsetTop, is right at the start of the text line */
    /* Navbar will change colour when the top of it hits the top of the bottom-container */
    /* bottomContainerEl.offsetTop 0 - navbarEl.offsetHeight gets up a bit higher, virtually adding the height of the navbar to the height of the bottom container */
    /* Navbar will change color when it hits the top of the bottom-container+height_of_navbar*/ 
    /* !Stay with me! */
    /* We have added a margin of 50px on the text,so we have to go 50 pixels up as well, to reach the final goal: */
    /* Navbar changes color when its bottom hits the bottom of the image  */

    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
});