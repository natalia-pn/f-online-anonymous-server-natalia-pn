const menuButton = document.querySelector('.nav-trigger');
const menu = document.querySelector('.nav');
const closeButton = document.querySelector('.nav-close');

const showMenu = () => menu.classList.add('nav-in');

const hideMenu = () => menu.classList.remove('nav-in');

menuButton.addEventListener('click', showMenu);