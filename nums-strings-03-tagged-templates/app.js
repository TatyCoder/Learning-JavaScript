function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}

console.log(randomIntBetween(5, 10));

// A tag template is a function that works together with a template literal:
function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
  //   strings[2]
  // }`;
  return {name: productName, price: productPrice};  
  // Converts the string into an object. I'm not forced to return a string in a tagged template.
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

// A tagged template (notice that there are no parentheses before ``):
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);  // Returns a string.
