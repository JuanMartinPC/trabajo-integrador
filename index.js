const button = document.getElementById("button");
const menu = document.getElementById("menu");
button.addEventListener("click", switchClass);

function switchClass(){
    menu.classList.toggle("active");
}



