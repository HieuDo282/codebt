const wrapper = document.getElementById('wrapper');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const btnPopup = document.getElementById('btnLogin-popup');
const iconClose = document.getElementById('icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
