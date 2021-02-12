// Now importing updateProducts:
import { renderProducts, updateProducts } from './rendering';
import { products as prods } from './products';

let products = prods;

export function deleteProduct(prodId) {
  const updatedProducts = [];
  let deletedProduct;  // New variable.
  for (const prod of products) {
    if (prod.id !== prodId) {  // To check if the product I'm looking at doesn't have the ID of the deleted one.
      updatedProducts.push(prod);  // In which case I want to keep it add it to updatedProducts.
    } else {  // Otherwise, if the IDs do match, I know this is the product which was deleted:
      deletedProduct = prod;
    }
  }
  products = updatedProducts;
  // Now calling updateProducts instead of renderProducts:
  updateProducts(deletedProduct, prodId, deleteProduct, false);  // 'false' because here I'm not adding but deleting.
}

export function addProduct(event) {
  event.preventDefault();
  const titleEl = document.querySelector('#new-product #title');
  const priceEl = document.querySelector('#new-product #price');

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

  products.unshift(newProduct);
  renderProducts(products, deleteProduct);
}
