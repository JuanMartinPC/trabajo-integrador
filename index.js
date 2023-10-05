const button = document.getElementById("button");
const menu = document.getElementById("menu");
button.addEventListener("click", switchClass);

function switchClass(){
    menu.classList.toggle("active");
}


const hideButton = document.getElementById("hideMenu");
const menuItem = document.querySelectorAll(".menu__item");
const header = document.querySelector(".menu__container");
function Hide(){

    header.classList.toggle("hidden")
    const applyClass = () => {
        for (i in menuItem){
            menuItem[i].classList.toggle("hidden");
        }
        ;
    }
    applyClass()    
    console.log(menuItem)
}

hideButton.addEventListener("click", Hide);


/* const openImage = document.getElementById("project__grid-container")

function openPopUp(){
    const getImages = () => {
        for (i in openImage){
            console.log(openImage[i])
        };
    }

    openImage.addEventListener('click', getImages);;
} */