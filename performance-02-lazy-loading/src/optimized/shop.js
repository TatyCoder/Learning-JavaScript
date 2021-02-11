// Now importing these:
import { products } from './products';
import { renderProducts } from './rendering';

function addProduct(event) {
  import('./product-management.js').then(mod => {
    mod.addProduct(event);
  })
}

// Adding this deleteProduct function:
function deleteProduct(productId) {
  import('./product-management.js').then(mod => {
    mod.deleteProduct(productId);
  })
}

// Adding this initProduct function here which is where I'm running it and remove it from product-management.js:
function initProducts() {
  renderProducts(products, deleteProduct);
}

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
