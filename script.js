const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('#menu-list');

if (menuToggle && menuList) {
  menuToggle.addEventListener('click', () => {
    const open = menuList.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  menuList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuList.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
