export class Map {
  constructor(coords) {
    // To render the map on the screen based on these coordinates:
    // this.coordinates = coords;
    this.render(coords);
  }
  
  render(coordinates) {
    // To check if I don't have access to a global Google variable:
    if (!google) {
      alert('Could not load maps library - please try again later!');
      return;
    }

    /* To work on the map. I pass the DOM element in which I want to render the map. 
    I can also pass in a second argument where I can configure the map: */
    const map = new google.maps.Map(document.getElementById('map'), {
      center:coordinates,  // This center property expects an object with a lat and a long key.
      zoom: 16  // I can also set a zoom property here.
    });

    // To add a marker, a pin which I place on the map:
    new google.maps.Marker({
      position: coordinates,  // To place the marker right in the center of the map.
      map: map  // This points at the const map from previous lines. So that I tell Google Maps that this marker should be placed in this map.
    });
  }
}
