// document.addEventListener("DOMContentLoaded", function() {
//     let tiktokLink = document.querySelector(".tiktok");
//     let facebookLink = document.querySelector(".facebook");
//     let handleLinkClick=function(event){
//         let link = this.href
//         window.location.href = link; 
//     };
//     tiktokLink.addEventListener("click", handleLinkClick)
//     facebookLink.addEventListener("click", handleLinkClick);
//   });
document.addEventListener("DOMContentLoaded", function() {
    let instagramLink = document.querySelector(".fa-brands.fa-instagram");
    let facebookLink = document.querySelector(".fa-brands.fa-facebook a");
    let handleLinkClick = function(event) {
      event.preventDefault();
      let link = this.getAttribute("href");
      window.location.href = link;
    };
    tiktokLink.addEventListener("click", handleLinkClick);
    facebookLink.addEventListener("click", handleLinkClick);
  });
  
  class Cat {
    constructor(id, img, name, description, price) {
      this.id = id;
      this.img = img;
      this.name = name;
      this.description = description;
      this.price = price;
    }
  }
  
  class Cart {
    constructor(cats) {
      this.listCards = [];
      this.cartQuantity = 0;
      this.total = document.querySelector('.card__total');
      this.quantity = document.querySelector('.quantity');
      this.listCard = document.querySelector('.card__listCard');
      this.cats = cats;
    }
  
    displayCats() {
      let str = '';
      for (let i = 0; i < this.cats.length; i++) {
        let cat = this.cats[i];
        str += `<div class="list__card">
                  <div class="list__card-img">
                    <img src="${cat.img}">
                  </div>
                  <div class="list__card-content">
                    <div class="list__card-content-title">${cat.name}</div>
                    <div class="list__card-content-des">${cat.description}</div>
                    <div class="list__card-content-price">${this.formatPrice(cat.price)}</div>
                    <input type="number" class="count" min="1" value="1">
                    <button class="list__card-content-add" onclick="cart.addToCart(${cat.id})">Add to cart</button>
                  </div>
                </div>`;
      }
      document.getElementById("list").innerHTML = str;
    }
  
    addToCart(id) {
      const selectedQuantity = parseInt(document.querySelector(`#list .list__card:nth-child(${id}) .count`).value);
      this.cartQuantity += selectedQuantity;
      this.quantity.textContent = this.cartQuantity;
  
      const selectedCatIndex = this.listCards.findIndex((cat) => cat.id === id);
      if (selectedCatIndex !== -1) {
        this.listCards[selectedCatIndex].quantity += selectedQuantity;
      } else {
        const selectedCat = this.cats.find((cat) => cat.id === id);
        this.listCards.push({
          id: selectedCat.id,
          img: selectedCat.img,
          name: selectedCat.name,
          description: selectedCat.description,
          price: selectedCat.price,
          quantity: parseInt(selectedQuantity)
        });
      }
      this.reloadCard();
    }
  
    reloadCard() {
      this.listCard.innerHTML = "";
      let count = 0;
      let totalPrice = 0;
  
      this.listCards.forEach((value, id) => {
        totalPrice += value.price * value.quantity;
        count += value.quantity;
  
        if (value != null) {
          const newDiv = document.createElement('li');
          newDiv.innerHTML = `
            <div class="card__image">
              <img src="${value.img}"/>
            </div>
            <div>${value.name}</div>
            <div>${this.formatPrice(value.price * value.quantity)}</div>
            <div class="total__count">
              <button class="count__button" onclick="cart.changeQuantity(${id}, ${value.quantity - 1})">-</button>
              <div class="count">${value.quantity}</div>
              <button class="count__button" onclick="cart.changeQuantity(${id}, ${value.quantity + 1})">+</button>
            </div>`;
          this.listCard.appendChild(newDiv);
        }
      });
      this.total.textContent = this.formatPrice(totalPrice);
    }
  
    changeQuantity(id, quantity) {
      if (quantity === 0) {
        this.listCards.splice(id, 1);
      } else {
        this.listCards[id].quantity = quantity;
      }
  
      let cartQuantity = 0;
      Object.values(this.listCards).forEach((cat) => {
        cartQuantity += cat.quantity;
      });
  
      this.cartQuantity = cartQuantity;
      this.quantity.textContent = cartQuantity.toString();
      this.reloadCard();
    }
  
    formatPrice(price) {
      const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      });
      return formatter.format(price);
    }
  }
  
  let cats = [
    new Cat(1, "images/fox.jpg", "Fox", "Scottish Longhair", 1000000),
    new Cat(2, "images/jiyon.jpg", "Jiyon", "Scottish Shorthair", 1500000),
    new Cat(3, "images/quinn.jpg", "Quinn", "British Shorthair", 1200000),
    new Cat(4, "images/teddy.jpg", "Teddy", "Scottish Longhair", 1100000),
    new Cat(5, "assets/cat5.jpg", "Cat 5", "Meo", 1800000),
    new Cat(6, "assets/cat6.jpg", "Cat 6", "Meo", 900000),
    new Cat(7, "assets/cat7.jpg", "Cat 7", "Meo", 2000000),
    new Cat(8, "assets/cat8.jpg", "Cat 8", "Meo", 1300000),
    new Cat(9, "assets/cat9.jpg", "Cat 9", "Meo", 1700000),
    new Cat(10, "assets/cat10.jpg", "Cat 10", "Meo", 1400000),
    new Cat(11, "assets/cat11.jpg", "Cat 11", "Meo", 1600000),
    new Cat(12, "assets/cat12.jpg", "Cat 12", "Meo", 1900000),
    new Cat(13, "assets/cat13.jpg", "Cat 13", "Meo", 1250000),
    new Cat(14, "assets/cat14.jpg", "Cat 14", "Meo", 1350000),
    new Cat(15, "assets/cat15.jpg", "Cat 15", "Meo", 1550000)
  ];
  
  const cart = new Cart(cats);
  cart.displayCats();
  
  let openShopping = document.querySelector('.shopping');
  let closeShopping = document.querySelector('.card__closeShopping');
  let cardContainer = document.querySelector('.card');
  openShopping.addEventListener('click', () => {
    openShopping.classList.add('active');
    cardContainer.style.display = "block";
  });
  closeShopping.addEventListener('click', (event) => {
    event.stopPropagation();
    openShopping.classList.remove('active');
    cardContainer.style.display = 'none';
  });
  function closeCart() {
    openShopping.classList.remove('active');
    cardContainer.style.display = 'none';
  }
  closeShopping.addEventListener('click', closeCart);
  
  function payment() {
    if (cart.total.textContent === "0") {
      alert("Please update your shopping cart.");
    } else {
      alert("Successful invoice payment: " + cart.total.textContent);
    }
    cart.listCards = [];
    cart.quantity.textContent = "0";
    cart.cartQuantity = 0;
    cart.reloadCard();
  }
  
  let thisPage = 1;
  let limit = 6;
  let list = document.querySelectorAll('#list .list__card');
  function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = thisPage * limit - 1;
    list.forEach((card, key) => {
      if (key >= beginGet && key <= endGet) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    listPage();
  }
  loadItem();
  
  function listPage() {
    let countPage = Math.ceil(list.length / limit);
    let listPageContainer = document.querySelector(".listPage");
    listPageContainer.innerHTML = "";
    if (thisPage !== 1) {
      let prev = document.createElement('li');
      prev.innerText = "<";
      prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
      listPageContainer.appendChild(prev);
    }
    for (let i = 1; i <= countPage; i++) {
      let newPage = document.createElement('li');
      newPage.innerText = i;
      if (i === thisPage) {
        newPage.classList.add('activePage');
      }
      newPage.addEventListener("click", function() {
        changePage(i);
      });
      listPageContainer.appendChild(newPage);
    }
    if (thisPage !== countPage) {
      let next = document.createElement("li");
      next.innerText = ">";
      next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
      listPageContainer.appendChild(next);
    }
  }
  
  function changePage(i) {
    thisPage = i;
    loadItem();
  }
  
  function logout() {
    window.location.replace("index.html");
  }
  
  let btnOpen = document.querySelector('.buttonAdd');
  let modal = document.querySelector('.modal');
  let iconClose = document.querySelector('.modal__header i');
  let btnSaveChanges = document.querySelector('.modal__footer button.btn-primary');
  let btnClose = document.querySelector('.modal__footer button.btn-secondary');
  function showModal() {
    modal.style.display = "block";
  }
  function hideModal() {
    modal.style.display = "none";
  }
  btnOpen.addEventListener('click', () => {
    showModal();
  });
  iconClose.addEventListener('click', () => {
    hideModal();
  });
  btnSaveChanges.addEventListener('click', () => {
    hideModal();
  });
  
  btnClose.addEventListener('click', () => {
    hideModal();
  });
  
  function showNotification() {
    const notification = document.querySelector('.toast');
    notification.style.display = 'flex';
  
    setTimeout(() => {
      notification.style.display = 'none';
    }, 2000);
  }
  const saveChangesBtn = document.querySelector('.modal__footer .btn-primary');
  saveChangesBtn.addEventListener('click', () => {
    showNotification();
  });
  