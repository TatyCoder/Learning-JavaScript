import { updateProducts } from './rendering';
import { products } from './products';  
// Removing prods
// let products = prods;

// Making these module wide global and using getElementById (instead of querySelector):
const titleEl = document.getElementById('title');
const priceEl = document.getElementById('price');

// Changed, to get the index of the item which should be deleted:
export function deleteProduct(prodId) {
  const deletedProductIndex = products.findIndex(prod => prod.id === prodId);
  const deletedProduct = products[deletedProductIndex];
  products.splice(deletedProductIndex, 1);  // To remove it from the array.
  updateProducts(deletedProduct, prodId, deleteProduct, false);
}

// Changed, shorter code:
export function addProduct(event) {
  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert('Please enter some valid input values for title and price.');
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price
  };

  products.unshift(newProduct);  // Note: using unshift is slower than using push.
  updateProducts(newProduct, newProduct.id, deleteProduct, true);
}
