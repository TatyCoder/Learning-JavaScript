const startGameBtn = document.getElementById('start-game-btn');

// function as an expression:
const start = function() {
    console.log('Game is starting');
};

/* function as a declaration, a statement:
function startGame() {
    console.log('Game is starting');
} 
*/

//startGame();  direct execution
startGameBtn.addEventListener('click', start);  // indirect execution

// console.log(typeof startGame);  it's a function

// console.dir(startGame);  functions are objects!