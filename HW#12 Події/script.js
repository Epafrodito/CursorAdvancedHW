function playSoundsKeys(elem){
    const key = document.getElementById(`${elem.keyCode}`);
    const audio = document.getElementsByClassName(`${elem.keyCode}`);
    if (!audio[0]) return;
    audio[0].currentTime = 0;
    audio[0].play();
    key.classList.add("goo");
    key.addEventListener('transitionend', removeTransition);
}

function removeTransition (elem){
    this.classList.remove('goo')
}

window.addEventListener("keydown", playSoundsKeys);

function playSoundsClick (elem){
    if (!elem.target.closest(".key")) return;
    const key = document.getElementById(elem.target.closest(".key").id);
    const audio = document.getElementsByClassName(elem.target.closest(".key").id);
    audio[0].currentTime = 0;
    audio[0].play();
    key.classList.add("goo");
    key.addEventListener('transitionend', removeTransition);
}

window.addEventListener("click", playSoundsClick);