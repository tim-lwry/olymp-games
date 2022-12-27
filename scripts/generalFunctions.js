function goToOnClick(url) {
    window.location.href = url;
    window.open(url);
}

function displayMenu() {
    let menu = document.getElementById("small-menu");
    menu.style.display = "grid";
    menu.style.animation="showMenu 0.15s forwards ease-in-out"; 
    menu.style.position="absolute";

}
function hideMenu() {
    let menu = document.getElementById("small-menu");
    menu.style.animation="hideMenu 0.1s forwards linear"; 

}

var tooWide = window.matchMedia("(min-width: 700px)")
var tooBig = window.matchMedia("(min-height: 400px)")
tooWide.addEventListener("change", hideMenu)
tooBig.addEventListener("change", hideMenu)


var images = ['../assets/hstr1.jpg', '../assets/hstr2.jpg', '../assets/hstr3.jpg'];

var index = 0;

function changeImg() {
    let imgElement = document.getElementById("changing-img");
    if (imgElement === null) {
        clearInterval(interval);
        return;
    }
    imgElement.src = images[index];
    //alert(index, images[index]);
    if (index + 1 == images.length) {
        index = 0;
    }
    else {
        index++;
    }

}
var interval;
window.onload = function () { interval = setInterval(changeImg, 1500) }