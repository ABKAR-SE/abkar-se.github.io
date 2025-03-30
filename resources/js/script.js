const buttons = document.querySelectorAll(".toggle-buttons");
const paragraphs = document.querySelectorAll(".textparagraphs > div");

let saveVal = paragraphs[0];

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        hideandShow(i);
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hideandShow(index){
    if(saveVal != paragraphs[index]){
        paragraphs[index].style.opacity = "0";
        paragraphs[index].style.display = "block";
        saveVal.style.display = "none";
        sleep(100).then(() => {
            paragraphs[index].style.opacity = "1";
            saveVal = paragraphs[index];
        });
    }
}