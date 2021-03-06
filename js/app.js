const listenToClickOnMenu = document.querySelector('.container-clicked');
const spinMenuOnClick = document.querySelector('.container');
const toggleMenu = document.querySelector('.container-menu');

const body = document.querySelector('body');

function toggleMenuVisibility() {
    toggleMenu.classList.toggle('display-none');
    toggleMenu.classList.toggle('scale-up-top');
    spinMenuOnClick.classList.toggle('container-active-in');
}

body.addEventListener('click', function(event){
    let regex = /container-menu-item/g;
    if (event.target.classList[0] == "container-menu-item") {
        toggleMenuVisibility();
    }
}, {passive: true});

listenToClickOnMenu.addEventListener('click', function(event) {
    event.preventDefault();
    toggleMenuVisibility();
    
}, {passive: false});


function newYear() {
    const date = new Date();
    const year = date.getFullYear();
    const addYear = document.querySelector('.year');
    addYear.innerText += year;
}

newYear();

// Lazy Load
function lazyLoad() {
    const mapParent = document.querySelector('.our-location');
    const authorImage = document.querySelector('.rounded-img');
    const mapHTMLElement = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.390504581313!2d-46.68937528492469!3d-23.55441448468626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579c1e66ce89%3A0x74b68881cb73c25c!2sGarage%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1595958986022!5m2!1spt-BR!2sbr" width="100%" height="600px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    let cards = document.querySelectorAll('.card');
    const cardImages = ["pr", "influencers", "content-marketing"];

    setTimeout(function() {
        let index = 0;
        cards.forEach((card) => {
            card.classList.add(cardImages[index]);
            index++;
        });
        authorImage.classList.add('michel');
    }, 1000)

    setTimeout(function() {
        mapParent.innerHTML += mapHTMLElement;
    }, 2000);
}

lazyLoad();
