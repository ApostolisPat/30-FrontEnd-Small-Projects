/*  When active class exists, then: search bar container is 50px
.active.search-bar-container{
    width: 50px;
}
 When active class exists, input is hidden 
.active .input{
    width: 0;
}
 When active class exists, mic-icon is hidden 
.active .mic-icon{
    width: 0;
} */


const magnifierElement = document.querySelector(".magnifier");
const searchBarElement = document.querySelector(".search-bar-container")

magnifierElement.addEventListener("click",()=>{
    if(searchBarElement.classList.contains("active")){
        searchBarElement.classList.remove("active");
    }else{
        searchBarElement.classList.add("active");
    }

    /* Or you can use the classList.Toggle command to skip the ifs */
    //searchBarElement.classList.toggle("active");
})