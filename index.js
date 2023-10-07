const button = document.getElementById("button");
const menu = document.getElementById("menu");
button.addEventListener("click", switchClass);
const menuItem = document.querySelectorAll(".menu__item");

function switchClass(){
    menu.classList.toggle("active");
    const main = document.getElementById('main');
    if (menu.classList.contains('active')){
        main.addEventListener('click', () => {
            menu.classList.remove('active')
        })
    }
    else if (menu.classList.contains('active')){
        menuItem.addEventListener('click', () => {
            menu.classList.remove('active')
        })
    }
}

const hideButton = document.getElementById("hideMenu");
const header = document.querySelector(".menu__container");

function Hide(){

    header.classList.toggle("hidden")
    const applyClass = () => {
        for (i in menuItem){
            menuItem[i].classList.toggle("hidden");
        }
    }
    applyClass()
}

hideButton.addEventListener("click", Hide);