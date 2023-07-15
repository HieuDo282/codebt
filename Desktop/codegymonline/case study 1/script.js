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

let product = [
    ["images/Teddy.jpg", "Bear", "scottish longhair", "2,000$"],
    ["images/fox.jpg", "Fox", "scottish longhair", "2,000$"],
    ["images/jiyon.jpg", "Jiyon", "scottish shorthair", "2,000$"],
    ["images/quinn.jpg", "Quinn", "british shorthair", "2,000$"],
]
function showProduct() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `<div class='product'>`;
        str += `<p><img src="${products[i][0]}" width="100px"</p>`;
        str += `<p>${products[i][1]}</p>`;
        str += `<p>${products[i][2]}</p>`;
        str += `</div>`;
    }
    document.getElementById("list-product").innerHTML = str;
}
showProduct();
