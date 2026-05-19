const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && menuList) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuList.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  menuList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuList.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
