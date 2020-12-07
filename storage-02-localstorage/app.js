const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';

// An example if I have a user object:
const user = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
  // Now using session storage:
  sessionStorage.setItem('uid', userId);
  // To convert the user object to a string:
  localStorage.setItem('user', JSON.stringify(user));  // JSON data is string data.
});

retrBtn.addEventListener('click', () => {
  // Now using session storage:
  const extractedId = sessionStorage.getItem('uid');
  // To parse the JSON data:
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);
  if (extractedId) {
    console.log('Got the id - ' + extractedId);
  } else {
    console.log('Could not find id.');
  }
});

/* Notes: don't store overly complex data in local storage because that's just  
not what it's built for.
Session storage data lives as long as my page is open in the browser, as long  
as I have it in an active tab even if I reload the page.
Local storage is never cleared unless the user clears it manually or the browser 
clears it because it's running out of space.
*/