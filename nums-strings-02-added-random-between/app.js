// To get a number between 5 and 10 (both included):
function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}

console.log(randomIntBetween(5, 10));

// Math.floor() rounds the number down to the nearest integer.
// Math.random() returns a number between 0 and 1.