/* This object will allow me to send HttpRequests, it is built into the browser 
and all browsers support this object:
*/
const xhr = new XMLHttpRequest();

/* To send a request or to get started, I need to configure the request. For   
that I use the constant which holds the object and call the open method there. 
open() takes at least two arguments, the first one describes the HTTP method I 
want to use; the second argument is the URL to which I want to send that request:
*/
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// To send the request I call .send():
xhr.send();