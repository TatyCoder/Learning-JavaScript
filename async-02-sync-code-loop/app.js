const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

// A normal for loop with a very high number as an exit condition:
let result = 0;

for (let i = 0; i < 100000000; i++) {
  result += i;
} 

console.log(result);

/* Notes: This loop executes and Javascript execution is blocked until    
this operation is done because I can only execute one operation at a 
time. So the trackUserHandler function executes once the loop is done.
*/