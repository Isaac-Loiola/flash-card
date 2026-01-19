// first step - add animation when click in flip-card

const style = document.createElement("style");
style.type = "text/css";

// Index for card loop animation
let indexLoop = 0;

//  front card flip animation 
function animationFront () {
    // adding animation class
    style.innerHTML = '.flip-card .flip-card-inner{ transform: rotateY(-180deg);} ';
    document.getElementsByTagName('head')[0].appendChild(style);
    
    // showing buttons container.
    containerBTN.hidden = false;

    // display animation
    setTimeout(() => {
        containerBTN.classList.remove('opacity-0')
        containerBTN.classList.add('opacity-100')
    }, 5);
}

function hiddenButtons() {
    setTimeout(() => {
        containerBTN.classList.remove('opacity-100')
        containerBTN.classList.add('opacity-0')
    }, 1);
    containerBTN.hidden = true;
    style.innerHTML = '';
}

//  back card flip animation 
function animationBack () {
    style.innerHTML = '';
}

const containerCards = document.querySelector('.swiper-wrapper');
containerCards.addEventListener('click', () =>{
    const frontCard = event.target.closest('.card-front');
    const backCard = event.target.closest('.card-back');

    if(frontCard != null){
        animationFront();
    }
    else if(backCard != null){  
        animationBack();
    }
});

// ------ final first step -------

// secund step - next card animation

// the container of the buttons
const containerBTN = document.getElementById('container-buttons');

// here are the result buttons, too are the animation controller 
const goodLevel = document.getElementById('ingles-level-good');
const badLevel = document.getElementById('ingles-level-bad');

function moreOneCountLoop () {
    indexLoop += 1;
}

function resetCountLoop () {
    indexLoop = 0;
}

goodLevel.addEventListener('click', () => {
    hiddenButtons();
    moreOneCountLoop();
    console.log(indexLoop);
});

badLevel.addEventListener('click', () => {
    hiddenButtons();
    moreOneCountLoop();
});

// -----------

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.ingles-level',
    // prevEl: '.swiper-button-prev',
  },
  allowTouchMove: false

});