// first step - add animation when click in flip-card

const style = document.createElement("style");
style.type = "text/css";


const containerBTN = document.getElementById('container-buttons');

const frontCard = document.getElementById('card-front');
const backCard = document.getElementById('card-back');

const player = document.createElement('audio');
player.src = 'audio/0001.mp3';

frontCard.addEventListener('click', () => {
    style.innerHTML = '.flip-card .flip-card-inner{ transform: rotateY(-180deg);} ';
    document.getElementsByTagName('head')[0].appendChild(style);
    containerBTN.classList.remove('hidden');
    setTimeout(() => {
        containerBTN.classList.remove('opacity-0')
        containerBTN.classList.add('opacity-100')
    }, 5);
});

backCard.addEventListener('click', () => {
    setTimeout(() => {
        containerBTN.classList.remove('opacity-100')
        containerBTN.classList.add('opacity-0')
        containerBTN.classList.remove('hidden');
    }, 1);
    style.innerHTML = '';
})

// -----------

// second step - add sound when click in button

const btnAudioFront = document.getElementById('audio-front');
const btnAudioBack = document.getElementById('audio-back');

const imgCardBack = document.getElementById('img-card-back');
const imgCardFront = document.getElementById('img-card-front');


btnAudioFront.addEventListener('click', () => {
    event.stopPropagation();
    imgCardBack.src = 'image/pause-1-svgrepo-com.svg';
    imgCardFront.src = 'image/pause-1-svgrepo-com.svg';
    player.play();
});

player.addEventListener('ended', () => {
    imgCardFront.src = 'image/play-1003-svgrepo-com (1).svg';
    imgCardBack.src = 'image/play-1003-svgrepo-com (1).svg';
})



btnAudioBack.addEventListener('click', () => {
    event.stopPropagation();
    imgCardBack.src = 'image/pause-1-svgrepo-com.svg';
    imgCardFront.src = 'image/pause-1-svgrepo-com.svg';
    player.play();
});


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

});