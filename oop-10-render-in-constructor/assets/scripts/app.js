// Errors will be fix in oop-11 app.js!

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
    // Adding the following line here in the parent contructor:
    this.render();
  }
  /* 
  Important note: Inside of a constructor, 'this' will refer to the object that is being created (ProductList or ProductItem or ShoppingCart).
  this.render() in the parent class will refer to the render method in the to-be-created object which is based on the subclass.
  What the 'new' keyword does is it make sure that a new object is created and that 'this' inside of the constructor is set to that object.
  */

  // Adding this empty method here, but it actually doesn't do anything, just shows that such method exists:
  render() {}

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

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
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
  }
}

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

  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list')
    ]);
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list');  // the 'const productItem =' was deleted here.
      // productItem.render(); --> was deleted here.
    }
  }
}

// Changes:
class Shop {
  // Adding a constructor where we would call the parent constructor:
  constructor() {
    this.render();
  }

  render() {
    this.cart = new ShoppingCart('app');
    // this.cart.render(); --> was deleted because is manually calling render.
    new ProductList('app');  // the 'const productList =' was deleted: not interested in storing the productlist.
    // productList.render(); --> was deleted because is manually calling render.
  }
}

// Changes:
class App {
  static cart;

  static init() {
    const shop = new Shop();
    // shop.render(); --> was deleted here because I don't want to call render.
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
