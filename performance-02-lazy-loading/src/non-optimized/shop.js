import { initProducts } from './product-management';

// Creating an addProduct function here instead of importing it from product management:
function addProduct(event) {
  import('./product-management.js').then(mod => {  // To load this code only when I need it.
    mod.addProduct(event);
  })
}

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
