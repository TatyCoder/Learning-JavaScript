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

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector('h2');
  }
}

// Now extends:
class ProductItem extends Component {
  //  Now has a 2nd parameter and 'super'
  constructor(product, renderHookId) {
    super(renderHookId);  // I call 'super' before 'this' (following line)
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }
  
  // Changes:
  render() {
    // Now I use this.createRootElement(tag, cssClass):
    const prodEl = this.createRootElement('li', 'product-item');
    // prodEl.className = 'product-item';  --> no longer required because class in now inside const prodEl.
    // Remains the same because it's the logic:
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
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    // return prodEl;  --> deleted here because no longer needs to return it.
  }
}

// Now extends:
class ProductList extends Component {
  products = [
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

  // Changes:
  constructor(renderHookId) {
    super(renderHookId);
  }

  // Changes:
  render() {
    // Now using 3 arguments:
    this.createRootElement('ul', 'product-list', [
    // the 3rd argument is an array of attributes (name, value):
      new ElementAttribute('id', 'prod-list')
    ]);
    // prodList.className = 'product-list'; --> got rid of this because class. 
    for (const prod of this.products) {
      // Here now I want to pass in an ID of the element where this item should be added to:
      const productItem = new ProductItem(prod, 'prod-list');
      productItem.render();  // the 'const prodEl =' was deleted here since render doesn't return it anymore.
   // prodList.append(prodEl);  --> deleted here. 
    }
 // return prodList;  --> deleted here because no longer needs to return it.
  }
}

// Changes:
class Shop {
  render() {
    // I don't need to get access to my element by ID here anymore:
    //  const renderHook = document.getElementById('app'); --> Deleted here.
    
    this.cart = new ShoppingCart('app');
    this.cart.render();
    const productList = new ProductList('app');  // I also forward app.
    // And now productList will be rendered:
    productList.render();  // the 'const prodListEl =' was deleted here.
    // renderHook.append(prodListEl); --> Deleted here, I don't want to append anything.
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
