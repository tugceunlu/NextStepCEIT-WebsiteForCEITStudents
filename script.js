const toggle = document.querySelector('.menu-toggle');
const navWrapper = document.querySelector('.nav-wrapper');

toggle.addEventListener('click', () => {
    navWrapper.classList.toggle('show');
});

document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            link.parentElement.classList.toggle('open');
        }
    });
});

