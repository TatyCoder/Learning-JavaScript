class PlaceFinder {
  // Add a constructor so that I have some code that runs right away when I create a new instance of this class:
  constructor() {
    const addressForm = document.querySelector('form');  // The first (and only) form element I find.
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAddressHandler);
  }

  locateUserHandler() {
    // geolocation is a browser API that is provided in Javascript:
    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
      );
      return;
    }
    // getCurrentPosition method takes two callback arguments, which will be two arrow functions:
    navigator.geolocation.getCurrentPosition(
      successResult => {
        const coordinates = {
          // Add Math.random() * 50 to show the result without you being able to locate me:
          lat: successResult.coords.latitude + Math.random() * 50,
          lng: successResult.coords.longitude + Math.random() * 50,
        };
        console.log(coordinates);
      },
      error => {
        alert(
          'Could not locate you unfortunately. Please enter an address manually!'
        );
      }
    );
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();