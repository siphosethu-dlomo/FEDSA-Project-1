// fetching data
const fetchedData =  fetch('https://fedsa-project-1.herokuapp.com/project-1/products');
const root = document.getElementById('root');

// product data
let item = [
  {
    imageSrc: './images/chair-9.jpg',
    imageAlt: 'Kau Chair',
    title: 'Kau Chair',
    description: 'Simple and easy for any environment',
    previousPrice: 'R899.99',
    currentPrice: 'R549.99',
    heartIconSrc: './images/heart.svg',
    heartIconAlt: 'heart',
    shoppingCartIconSrc: './images/shopping-cart.svg',
    shoppingCartIconAlt: 'shopping-cart',
  },

  {
    imageSrc: './images/chair-3.jpg',
    imageAlt: 'Beachcomer Bar Stool',
    title: 'BEACHCOMER',
    description: 'Outdoor resistant bar stool pith a smooth finish',
    previousPrice: 'R1099.99',
    currentPrice: 'R899.99',
    heartIconSrc: './images/heart.svg',
    seartIconAlt: 'heart',
    shoppingCartIconSrc: './images/shopping-cart.svg',
    ShoppingCartIconAlt: 'shopping-cart',
  },

  {
    imageSrc: './images/chair-5.jpg',
    imageAlt: 'Countessa Chair',
    title: 'COUNTESSA',
    description: 'A mix between class and affordability',
    previousPrice: 'R899.99',
    currentPrice: 'R549.99',
    heartIconSrc: './images/heart.svg',
    heartIconAlt: 'heart',
    shoppingCartIconSrc: './images/shopping-cart.svg',
    shoppingCartIconAlt: 'shopping-cart',
  }
];

// load button data
let loadButton = [
  {
    buttonTitle: 'load more'
  }
];

// generating product cards
let productCard = item.map(item => {
  return `
  <li class="card">
    <div class="card-img">
      <img src="${item.imageSrc}" alt="${item.imageAlt}">
    </div>
    <div class="card-text-container">
      <h2>${item.title}</h2>
      <p class="product-description">${item.description}</p>
      <div class="price-section">
        <div class="price-tag">
            <p class="line-through">${item.previousPrice}</p>
            <p class="discount-price">${item.currentPrice}</p>
        </div>
        <div class="icons-container">
          <button class="icon-heart">
            <img src="${item.heartIconSrc}" alt="${item.heartIconAlt}">
          </button>
          <button class="icon-shopping-cart">
            <img src="${item.shoppingCartIconSrc}" alt="${item.shoppingCartIconAlt}">
          </button>
        </div>
      </div>
    </div>
  </li>`
});
productCard = productCard.join('');

// generating load button
let loadButtonOutput = loadButton.map(button => {
  return `
  <div class="btn-wrapper">
    <a class="btn-load-more" href="#">
      ${button.buttonTitle}
    </a>
  </div>`
});
loadButtonOutput = loadButtonOutput.join('');

// outputitng generated data
root.innerHTML += productCard;
root.innerHTML += loadButtonOutput;

// adding additional style classes to the second product item: BEACHCOMER
const listItems = document.querySelectorAll('li');
let secondProductItemElement = listItems[4];
secondProductItemElement.classList.add('card-2');
let childOfsecondProductItemElement = listItems[4].firstElementChild;
childOfsecondProductItemElement.classList.add('card-img-2');