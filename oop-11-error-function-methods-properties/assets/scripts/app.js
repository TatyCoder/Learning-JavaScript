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

// Changes:
class Component {
  // Adding a 2nd argument and if, since we have problems with rendering too early:
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

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

  // Changes:
  constructor(renderHookId) {
  // Adding a 2nd argument 'false' here so that super doesn't call render():
    super(renderHookId, false);
    // Moved here not as a field but actually as a property with this.orderProducts equal**:
    this.orderProducts = () => {
      console.log('Ordering...');
      console.log(this.items);
    };
    this.render();  // New for calling render manually.
  }
  
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
   
  // ** Here was a field which holds an arrow function: 
  // orderProduct = () => {
  //   console.log('Ordering...');
  //   console.log(this.items);
  // }

  /* 
  Moved inside 'constructor' because render() is invoked from the 'constructor',
  and render() makes a reference to this function. Normally this would work here
  but since render() gets called in the 'constructor' when I called 'super', 
  it will actually be called before a property is created based on this field.
  Important note: Properties are created based on fields. 
  And fields are translated to properties after the constructor ran.
  */

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    // New, to make this button clickable:
    const orderButton = cartEl.querySelector('button');
    // orderButton.addEventListener('click', () => this.orderProducts()); --> arrow 
    // functions don't know 'this', will not be bound to what the eventlistener wants.
    orderButton.addEventListener('click', this.orderProducts);  // A better way:
    // orderProducts without parentheses so that the click event executes that for us.
    this.totalOutput = cartEl.querySelector('h2');
  }
}

// Changes:
class ProductItem extends Component {
  constructor(product, renderHookId) {
  // Adding a 2nd parameter 'false' so that the parent component will not render ('override'):
    super(renderHookId, false);
    this.product = product;
    this.render();  // New for calling render manually after we know that the product was set.
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

// Changes:
class ProductList extends Component {
  // Now an empty array:
  products = [];

  // Followed by the constructor:
  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  // New method:
  fetchProducts() {
    // For reaching out to a server (making http request):
    this.products = [
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
    this.renderProducts();  // New for calling it here once I got my products.
  }

  // New method, here we render that initial content:
  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list');
    }
  }

  // Changes, we render that list. 
  // Initially it's an empty list but then we add the products as soon as we have them:
  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list')
    ]);
    // New, because it depended on something we don't know if it's there yet:
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }

  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
