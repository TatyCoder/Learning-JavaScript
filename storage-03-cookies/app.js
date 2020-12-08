const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {name: 'Max', age: 30};
  // To add an entry => a key then an equal sign (without any whitespace) and then a value:
  document.cookie = `uid=${userId}; max-age=360`;  // max-age=360: to expire in 360 seconds.*
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  // To read the value, this will output what's inside of cookies:
  console.log(document.cookie);
  // To split a string into substrings using a separator and return them as an array:
  const cookieData = document.cookie.split(';');
  /* map is a method which is available on every array and cookie data is an array,
  which requires a function which is executed on every item in the array and every 
  item in the array is just a string: */
  const data = cookieData.map(i => {
   // trim is a method to call on strings to remove excess whitespace at the beginning or end:
    return i.trim();
  });
  // To find a specific value:
  console.log(data[1].split('=')[1]); // This logs the user value.
});

/* Notes: cookies are these special storage because they are attached  
to outgoing HttpRequests. Cookies only are available if the web page is 
getting served with a real server.
document.cookie gives me access to all cookie data stored.
document.cookie equal to a string will add a new entry to the cookie, it will 
not override or clear the existing cookie data, it will add something to it.

* To set an expiration:
1) ;max-age=max-age-in-seconds (e.g., 60*60*24*365 or 31536000 for a year) 
or
2) ;expires=date-in-GMTString-format 
If neither expires nor max-age specified it will expire at the end of session.
*/