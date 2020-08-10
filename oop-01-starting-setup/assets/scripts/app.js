const productList = {
    products: [{
            title: 'A Pillow',
            imageUrl: 'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/A1000454-10X8-CROP?$AFHS-PDP-Zoomed$',
            description: 'A soft pillow',
            price: 19.99
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://secure.img1-fg.wfcdn.com/im/47664163/compr-r85/9248/92489456/patricia-floral-handmade-tufted-neutral-indooroutdoor-area-rug.jpg',
            description: 'A carpet which you might like - or not.',
            price: 89.99
        }
    ],
    render() { // \$ -> to use the dollar sign character for prod.price:
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