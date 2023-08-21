//PopUp

const openPopUp = document.getElementById('open_popup');
const closePopUp = document.getElementById('popup_close');
const popUp = document.getElementById('popup');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})



// slider
let offset = 0;
const sliderLine = document.querySelector('.destination');

document.querySelector('.radio_1').addEventListener('click', function(){
    offset = 860;
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.radio_2').addEventListener('click', function(){
    offset = 0;
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.radio_3').addEventListener('click', function(){
    offset = -860;
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.radio_4').addEventListener('click', function(){
    offset = 860;
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.radio_5').addEventListener('click', function(){
    offset = -860;
    sliderLine.style.left = offset + 'px';
});

// burger menu

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.nav-close');
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav-active');
    });
}());