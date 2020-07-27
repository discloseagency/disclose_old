const listenToClickOnMenu = document.querySelector('.container-clicked');
const spinMenuOnClick = document.querySelector('.container');
const toggleMenu = document.querySelector('.container-menu');

const body = document.querySelector('body');


body.addEventListener('click', function(event){
    let regex = /container-menu-item/g;
    if (event.target.classList[0] == "container-menu-item") {
        toggleMenu.classList.toggle('display-none');
    }
}, {passive: true});

listenToClickOnMenu.addEventListener('click', function(event) {
    toggleMenu.classList.toggle('display-none');
    toggleMenu.classList.toggle('scale-up-top');
    spinMenuOnClick.classList.toggle('container-active-in');
}, {passive: true});


const date = new Date();
const year = date.getFullYear();

const addYear = document.querySelector('.year');
addYear.innerText += year;

// Google Maps

console.log("hue");

const mapParent = document.querySelector('.our-location');

function lazyLoad() {
    const mapHTMLElement = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3392663071804!2d-46.665133784470136!3d-23.556255684685322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59dd6a6afd61%3A0x6a2e6f872e2ae1aa!2sWeWork%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1595426344159!5m2!1spt-BR!2sbr" width="100%" height="600px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    setTimeout(function() {
        mapParent.innerHTML += mapHTMLElement;
    }, 1000);
}

lazyLoad();