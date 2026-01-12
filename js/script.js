// first step - add animation when click in flip-card

const style = document.createElement("style");
style.type = "text/css";


const frontCard = document.getElementById('card-front');
const backCard = document.getElementById('card-back');

const player = document.createElement('audio');
player.src = 'audio/0001.mp3';

frontCard.addEventListener('click', () => {
    style.innerHTML = '.flip-card .flip-card-inner{ transform: rotateY(-180deg);} ';
    document.getElementsByTagName('head')[0].appendChild(style);
});

backCard.addEventListener('click', () => {
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
    player.play();
});
