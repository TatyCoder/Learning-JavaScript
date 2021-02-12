export function renderProducts(products, deleteProductFn) {
  const productListEl = document.getElementById('product-list');
  productListEl.innerHTML = '';  // When it executes always clears all existing DOM elements in the productList element.
  products.forEach(product => {
    const newListEl = document.createElement('li');
    const prodTitleEl = document.createElement('h2');
    const prodPriceEl = document.createElement('p');
    const prodDeleteButtonEl = document.createElement('button');

    prodTitleEl.innerHTML = product.title;
    prodPriceEl.innerHTML = product.price;
    prodDeleteButtonEl.innerHTML = 'DELETE';

    newListEl.id = product.id;  // To get the ID property.

    prodDeleteButtonEl.addEventListener(
      'click',
      deleteProductFn.bind(null, product.id)
    );

    newListEl.appendChild(prodTitleEl);
    newListEl.appendChild(prodPriceEl);
    newListEl.appendChild(prodDeleteButtonEl);

    productListEl.appendChild(newListEl);
  });
}

// Adding updateProducts function to improve the code when I add or remove an item:
export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {  // If I'm adding I want to create a new product and append it. 
    
  } else {  // Otherwise I want to remove it.
    const productEl = document.getElementById(prodId);
    productEl.remove();  // Shorter and more modern code.
    // productEl.parentElement.removeChild(productEl);  // Optional code.
  }
}