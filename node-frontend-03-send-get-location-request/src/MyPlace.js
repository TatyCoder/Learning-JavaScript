import { Map } from './UI/Map';

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector('header h1');
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
// No longer parsing the coordinates and the address from the URL params:
// const coords = {
//   lat: parseFloat(queryParams.get('lat')),
//   lng: +queryParams.get('lng')
// };
// const address = queryParams.get('address');

// Now instead on the query params, I will find such a location key and that will hold the location ID which I want to look up on the backend server:
const locId = queryParams.get('location');
fetch('http://localhost:3000/location/' + locId)  // This sends a get request to this URL where the ID is part of the URL.
  .then(response => {  // Then I'll get back some response.
    if (response.status === 404) {  // In which case I didn't find a location.
      throw new Error('Could not find location!');
    }
    return response.json();  // This returns the parsed response, the parsed JSON data.
  })
  .then(data => {  // Then I get the ultimate data in here.
    new LoadedPlace(data.coordinates, data.address);
  })
  .catch(err => {  // To catch any errors.
    alert(err.message);
  });
