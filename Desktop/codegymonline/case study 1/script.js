
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

function login() {
    let username = document.getElementById("text_login_email").value;
    let password = document.getElementById("text_login_password").value;
    if (password === "28022000"){
        window.localStorage.setItem("User",username);
        window.location.href="products.html";
    }else{
        alert("Sai thông tin đăng nhập")
    }
}