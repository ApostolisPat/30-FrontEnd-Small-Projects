const testimonials = [
    {
        name: "Aria Thompson",
        photoUrl: "https://images.unsplash.com/photo-1534954553104-88cb75be7648?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "AliensRReal.com is the go-to source for mind-bending conspiracy theories and intriguing fake news. Their content is out of this world, captivating audiences with each new revelation. I highly recommend AliensRReal.com for anyone seeking a thrilling escape into the unknown."
    },
    {
        name: "Rafael Oldman",
        photoUrl: "https://images.unsplash.com/photo-1544819576-82e8d26e7d22?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "AliensRReal.com provides an exhilarating collection of conspiracy theories and fake news that will keep you on the edge of your seat. The website offers a captivating blend of mystery and suspense that is sure to intrigue any enthusiast of the paranormal. Explore a world of intrigue with AliensRReal.com!"
    },
    {
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1499095492760-d85dee2c7cfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I never believed in conspiracy theories until I stumbled upon AliensRReal.com. Their content is so compelling and thought-provoking. I find myself getting lost in their fake news stories, always wondering what is real and what isn't. Highly recommend checking out their website!"
    },
];

const imgElement = document.querySelector("img");
const textElement = document.querySelector(".text");
const usernameElement = document.querySelector(".username");

let index = 0;
updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[index];
    imgElement.src = photoUrl;
    textElement.innerHTML = text;
    usernameElement.innerHTML = name;
    index++;
    if(index=== testimonials.length){
        index = 0;
    }
    /* setTimeout: Sets timer and calls a method */
    setTimeout(()=>{
        updateTestimonial();
    }, 3000);
}


