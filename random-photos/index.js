{/* <div class="image-container">
        <img src="https://picsum.photos/300?random=1">
        <img src="https://picsum.photos/300?random=2">
        <img src="https://picsum.photos/300?random=3"></img>
 */}
const imageContainer = document.querySelector(".image-container");

const btnElement = document.querySelector(".btn");


btnElement.addEventListener("click", () => {
    imageNum = 10; /* Without 'let' so the scope extends to addNewImages() */
    addNewImages();

});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImgElement = document.createElement("img");
        /* Use ` to use js variables */
        newImgElement.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainer.appendChild(newImgElement);
    }

}