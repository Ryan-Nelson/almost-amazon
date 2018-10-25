import {addToCart} from './cart.js';

const books = [
    {
        title: "star wars Path of Destruction",
        image: "../image/Path-of-destruction.jpg",
        price: "$24.99"
}
];

const getPrice = () => {
    return books.price;
};

const addToCartButton = document.getElementById('addToCartBtn');

addToCartButton.addEventListener('click', function (e) {
addToCartButtonEvent();
});

const addToCartButtonEvent = () => {
addToCart();
}

export { getPrice }