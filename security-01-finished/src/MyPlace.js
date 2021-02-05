import { Map } from './UI/Map';
// To import the 'sanitize-html' package:
import sanitizeHtml from 'sanitize-html';

// Using .innerHTML instead of .textContent:
class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector('header h1');
    // headerTitleEl.textContent = address;  // This is safer code.
    headerTitleEl.innerHTML = sanitizeHtml(address);  // If I use .innerHTML I need to sanitize the code.
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const coords = {
  lat: parseFloat(queryParams.get('lat')),
  lng: +queryParams.get('lng')
};
const address = queryParams.get('address');
new LoadedPlace(coords, address);

/* Notes: 'sanitize-html is a package which sanitizes text and remove any unwanted tags 
in there so that invalid code doesn't execute. I want to make sure that whatever I send 
is validated on the server before it's stored in a database. In this app where I don't 
have a server side, it's all client side code, it's just data that's part of URL, then 
of course my only chance is to do that sanitization in the browser and I can do it like
shown above. Now I'm sure that this specific cross site scripting attack hole is fixed.
*/