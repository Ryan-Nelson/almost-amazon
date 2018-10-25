import { printToDom } from '../helpers/util.js';

const addToCart = () => {
    let domString = '';
    domString += `<div class="card" style="width: 18rem;">`;
    domString +=    `<div class="card-body">`;
    domString +=    `<h5 class="card-title">Summary</h5>`;
    domString +=    `<p class="card-text" id="price"></p>`;
    domString +=    `<p class="card-text total">Order total: $24.99</p>`;
    domString += `</div>`;
    printToDom(domString, 'cart');
};


export { addToCart }