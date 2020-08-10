class Product {  
  // title = 'DEFAULT';  // These are 'fields'
  // imageUrl;  // If I don't set a value here, then it will be undefined initially.
  // description;
  // price;

  /* 
  After the 'fields' I add a method -> someName() {} (without ; at the end):
  'constructor' is a reserved name, it takes any arguments/parameters I want. 
  In the constructor I can add properties for the first time without having 
  defined 'fields' for them before. 
  Note: I can have more than one method.
  */
  constructor(title, image, desc, price) {
    this.title = title;  // These are 'class properties'
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}
/* 
Classes start with uppercase. Inside the {} is the blueprint.
Use = to assign values (not :).
Use ; at the end of each line (not ,).
Classes do not replace objects, instead, we build objects based on classes.
*/

// Keyword 'new' + class name + () -> creates an object, or an instance of a class:
const productList = {
  products: [
    new Product(
      'A Pillow',
      'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/A1000454-10X8-CROP?$AFHS-PDP-Zoomed$',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://secure.img1-fg.wfcdn.com/im/47664163/compr-r85/9248/92489456/patricia-floral-handmade-tufted-neutral-indooroutdoor-area-rug.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}" >
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();
