const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');

iconMenu.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})