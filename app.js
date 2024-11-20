const menu = document.querySelector('#mobile-menu');
const hamMenu = document.querySelector('.navbar__hamburger');
const offScreenMenu = document.querySelector('.off-screen-menu');

menu.addEventListener('click', function() {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});