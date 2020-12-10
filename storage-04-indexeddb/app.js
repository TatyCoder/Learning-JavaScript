const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

// Define it globally to make it available in the whole script:
let db;

/* The first step with IndexedDB is to create a database or open a connection to an 
existing one. To open it, I first pass the name of the database (of course it shouldn't 
exist yet as a database). The second argument can be passed, can be the version of the 
database, I can use that to keep track of different versions: */
const dbRequest = indexedDB.open('StorageDummy', 1);  // This open method returns a request.

/* On dbRequest, I can add two event handlers, two event listeners, either with add event 
listener or for best cross browser support, with onSuccess which should point at a function 
and then also additionally onError which should point at a function. Now in both functions, 
I get access to an event object and now I can interact with that: */
dbRequest.onsuccess = function(event) {
  // event.target.result is a property that will hold access to the database that was created:
  db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;

  /* I can work with multiple object stores and each object store can store multiple objects. 
  With the database I get access to, I can use it to create an object store by calling create 
  ObjectStore: this is a function that takes a couple of parameters, the first one is the name 
  of the object store. Every object store needs one key, one property that exists on every 
  stored object by which this object can be identified. I configure this in a second argument 
  I pass to create object store, there I pass in a configuration object which has to have a 
  key path property, where I set up that single key which every item has by which it can be 
  identified, like an id field: */
  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  // To interact with the database and the object store:
  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
    // The first argument is the name of the object store, second argument is the mode under which I want to access this store:
      .transaction('products', 'readwrite')  // Could be also 'readonly'.
      .objectStore('products');  // Pass in that name again.
    // To add a new item, that item should be a Javascript object which needs to have that keyPath here and then it can have any fields I want:  
    productsStore.add({
      id: 'p1',
      title: 'A First Product',
      price: 12.99,
      tags: ['Expensive', 'Luxury']
    });
  };
};

dbRequest.onerror = function(event) {
  console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {
  // To check if db is set or not, so that I don't try to work with it if it doesn't exist yet:
  if (!db) {
    return;
  }
  // To add an item, I need to repeat previous code here:
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productsStore.add({
    // A new product:
    id: 'p2', 
    title: 'A Second Product',
    price: 122.99,
    tags: ['Expensive', 'Luxury']
  });
});

retrBtn.addEventListener('click', () => {
  // To get an item, I need to repeat previous code here:
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productsStore.get('p2');

  request.onsuccess = function() {
    // I'll have a result property which should be the item that was retrieved:
    console.log(request.result);
  }
});
