// To import 'puppeteer':
const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

// This is an end-to-end test or user interface test:
test('should create an element with text and correct class', async () => {
  // First, setting up a browser, this returns a promise:
  const browser = await puppeteer.launch({
    headless: true,  // Set headless to false to actually run a browser with an user interface.
    // slowMo: 80,  // To slow down the automated operations.
    // args: ['--window-size=1920,1080']  // An array which launch a browser with this size.
  });
  const page = await browser.newPage();  // To create a new page.
  await page.goto(  // To tell the browser which page to load.
    'file:///C:/Users/Taty/Documents/Web%20Developer/JavaScript-Max/testing-04-e2e-tests/index.html'  // URL which should be loaded.
  );
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('input#age');
  await page.type('input#age', '28');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);  //  $eval to get access to an element.
  expect(finalText).toBe('Anna (28 years old)');
}, 10000);  // The maximum timeout (seconds).

/* Notes: all these browser related things are promises that 
simply take some time to execute so I have to await each step. 
I pass a function as a second argument to $eval where I then 
define what I want to do with the element I selected there; 
in this case I'm returning the text content. The test function 
takes a third argument and that is the maximum timeout. */