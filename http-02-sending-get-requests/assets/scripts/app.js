// To output the list of posts in the index.html file:
const listElement = document.querySelector('.posts');

// To get access to our template:
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// This will automatically be parsed for me:
xhr.responseType = 'json';

// To get a response of the request, I use the .onload event:
xhr.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response);  // To manually parse the response.
  // console.log(listOfPosts);
  const listOfPosts = xhr.response;  // To store the response.
  // To replicate the template for every post and add it to the list element:
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true); // true to make a deep clone.
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
};

xhr.send();

/* Notes: browsers not always support add event listener, so I use xhr.onload  
assigning a function to this event handler (function written in any syntax I want), 
that handles the incoming response. However, I don't receive the response as an 
argument, instead I can extract it on the xhr.response key.
xhr.response gives me JSON data and not an array I can use like that. In order to use 
it, I have to convert the JSON data to Javascript types, to Javascript arrays and objects 
and so on, and Javascript has a built-in helper that helps me with that, it has a built-in 
JSON constructor function or class which has a couple of static helper methods, parse and 
stringify; stringify helps to convert Javascript code or Javascript objects and arrays 
to JSON data, and parse helps to convert JSON data back to Javascript (and I can see, for 
example, that the double quotes around the property names are gone). 
*/