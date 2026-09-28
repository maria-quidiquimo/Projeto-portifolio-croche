const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter;
        filters.forEach((filter) => filter.setAttribute('aria-pressed', String(filter === button)));
        projects.forEach((project) => {
            project.hidden = category !== 'todas' && project.dataset.category !== category;
        });
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    siteNav.classList.toggle('is-open', !isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    siteNav.classList.remove('is-open');
}));

document.querySelector('#year').textContent = new Date().getFullYear();