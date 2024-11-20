const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");


 /* forEach method triggers a function for each element(kit) */
kits.forEach((kit)=>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
    containerEl.appendChild(btnEl);

    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3";
    containerEl.appendChild(audioEl);

    btnEl.addEventListener("click",()=>{
        audioEl.play();
    });

    /* Even listener for pressing buttons to play the sounds */
    /* Add event in the parenthesis to get the key */
    window.addEventListener("keydown", (event)=>{
        if(event.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)";
            }, 100);
        }
    })

});