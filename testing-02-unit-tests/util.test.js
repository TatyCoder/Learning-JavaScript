/* This is a new file into which I'll store my tests.
'jest' will automatically detect files with .test.js or 
.spec.js in them, and it will run them automatically. */

// To test the generateText function I first need to import it:
const { generateText } = require('./util');  // Syntax supported by 'jest'.

// This is a simple unit test:
test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');  // I pass the value I expect text to be.
});

/* Notes: test() is a function which first argument is a name or a description. 
The second argument is an anonymous function which 'jest' will execute to run my 
tests, so in this function I add the testing code, the code that will be executed. 
In Command Prompt: npm start to start it & npm test to test it (package.json). */