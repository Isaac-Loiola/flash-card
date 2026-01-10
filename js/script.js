// first step - add animation when click in flip-card

const style = document.createElement("style");
style.type = "text/css";


const frontCard = document.getElementById('card-front');
const backCard = document.getElementById('card-back');

frontCard.addEventListener('click', () => {
    style.innerHTML = '.flip-card .flip-card-inner{ transform: rotateY(-180deg);} ';
    document.getElementsByTagName('head')[0].appendChild(style);
});

backCard.addEventListener('click', () => {
    style.innerHTML = '';
})