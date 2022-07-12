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