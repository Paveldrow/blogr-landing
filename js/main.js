const subMenu = document.querySelectorAll('.menu__title');
const buttonMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');

const removeOpenSubMenu = () => {
  subMenu.forEach(element => {
    element.classList.add('menu__title-hidden');
    element.classList.remove('menu__title--active');
  });
}

for (let item of subMenu) {
  item.addEventListener('click', () => {
    item.classList.toggle('menu__title-hidden');
    item.classList.toggle('menu__title--active');
  });
}

buttonMenu.addEventListener('click', () => {
  menu.classList.toggle('menu--hidden');
  buttonMenu.classList.toggle('button-menu--closed');
  removeOpenSubMenu();
});

