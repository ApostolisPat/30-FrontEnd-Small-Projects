const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

/* Array to fill it with emojis from API */
const emoji=[];

async function getEmoji(){
    /* Wait for response */
    /* If you use await, use async on function */
    let response = await fetch("https://emoji-api.com/emojis?access_key=bdb86b1ed7fbfbcb8ad912ea6476acc8c6026f3e");

    /* Change response to JSON */
    data = await response.json();
    console.log(data);

    /* Only want 1500 emojis */
    for(let i=0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName
        });
    }
};

getEmoji();

btnEl.addEventListener("click",()=>{
    let randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;

/*     console.log(randomNum);
    console.log(emoji[randomNum]); */
    
    
});


