const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu');
const heroElement = document.querySelector('.hero');
const navList = document.querySelector('.nav-list'); 

menuToggle.addEventListener('click', function (){
    bodyElement.classList.toggle('is-open');
    heroElement.classList.add('is-open');
});

// close the navlist after any link is clicked //
 
navList.addEventListener('click', function (e){
    let clickedElement = e.target;

    if (clickedElement.classList[0] === 'nav-link'){
        bodyElement.classList.remove('is-open');
    }
});

// add event listener to the window object to close nav bar when clicked outside

window.addEventListener('click', function (e){
    let clickedElement = e.target;

    if (clickedElement.matches('.is-open')){
        bodyElement.classList.remove('is-open');
        heroElement.classList.remove('is-open');
    }
});

