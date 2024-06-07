// Example JavaScript for interactive features

// You can add any interactive JavaScript here
// For example, toggling a mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('nav');
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
    });
});
