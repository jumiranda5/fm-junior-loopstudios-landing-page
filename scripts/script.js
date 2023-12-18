'use-strict'

const headerNav = document.querySelector('.header-nav');
const toggleBtn = document.querySelector('.menu-button');
const toggleBtnText = document.getElementById('menu-text');
const headerNavContainer = document.querySelector('.header-nav-container');

toggleBtn.addEventListener('click', () => toggleMenu());

const toggleMenu = () => {
    const isVisible = headerNav.getAttribute("data-visible");
    
    if (isVisible === "true") hideMenu();
    else showMenu();
}

const showMenu = () => {
    headerNav.setAttribute("data-visible", true);
    toggleBtn.setAttribute("aria-expanded", true);
    toggleBtnText.textContent = "Hide menu";
    headerNavContainer.classList.add('freeze-nav');
}

const hideMenu = () => {
    headerNav.setAttribute("data-visible", false);
    toggleBtn.setAttribute("aria-expanded", false);
    toggleBtnText.textContent = "Show menu";
    headerNavContainer.classList.remove('freeze-nav');
}