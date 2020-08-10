// A class that predefines an object, a blueprint for data contained in a product:
class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

// A new class that holds the logic for rendering a single product:
class ProductItem {
  constructor(product) {  // using 'this', so I don't need the 'fields'
    this.product = product;  
  }
// With this I just expect to get a product which has the structure defined in class Product. 

  // Adding another method for creating/rendering the single product (with this.product.x):
  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    return prodEl;
  }
}

// A new class that holds the logic for rendering the product list:
class ProductList {
  products = [  // 'products' is the field, and the value of this field is an array
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
  ];

  constructor() {}  // An empty 'constructor' because 'products' was initialized above

  // Adding another method for rendering the product list:
  render() { 
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();  // Creates a new instance of ProductList ('instantiate')
productList.render();
