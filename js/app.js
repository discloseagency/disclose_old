const listenToClickOnMenu = document.querySelector('.container-clicked');
const spinMenuOnClick = document.querySelector('.container');
const toggleMenu = document.querySelector('.container-menu');

const body = document.querySelector('body');


body.addEventListener('click', function(event){
    let regex = /container-menu-item/g;
    if (event.target.classList[0] == "container-menu-item") {
        toggleMenu.classList.toggle('display-none');
    }
});

listenToClickOnMenu.addEventListener('click', function(event) {
    event.preventDefault();
    toggleMenu.classList.toggle('display-none');
    toggleMenu.classList.toggle('scale-up-top');
    spinMenuOnClick.classList.toggle('container-active-in');
});


const date = new Date();
const year = date.getFullYear();

const addYear = document.querySelector('.year');
addYear.innerText += year;


const preloader = document.querySelector('.bg-loader');
const header = document.querySelector('.header-fixed');

setTimeout(function() {
    preloader.classList.add('display-none');
    header.classList.remove('display-none');
}, 1000);