// Setting a global const to store the API key:
const GOOGLE_API_KEY = 'AIzaSyDBRPUjO-93-MY7G_s3qYanksSl2dQoe2ct';  // Same key from index.html file.

// To translate the entered address into coordinates:
export async function getCoordsFromAddress(address) {
  // The encodeURI function it's globally available, I can pass in a string and I get a URL-friendly string back:
  const urlAddress = encodeURI(address);
  // Using a template literal to make it dynamic:
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);
  if (!response.ok) {  // if the response is not ok.
    throw new Error('Failed to fetch coordinates. Please try again!');
  }  // Error is a globally available constructor function in JavaScript.
  // To extract the response data which hold the coordinates:
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = data.results[0].geometry.location;
  return coordinates;
  /* results key is an array, and the first element of the array is itself an object which 
  will have a geometry property which will be an object with a location property, which will 
  be an object with latitude and longitude.
  */
}