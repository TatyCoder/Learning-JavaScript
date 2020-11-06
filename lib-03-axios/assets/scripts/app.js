const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

// Here I won't use this function, just axios:
function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader('Content-Type', 'application/json');

  //   xhr.open(method, url);

  //   xhr.responseType = 'json';

  //   xhr.onload = function() {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  // xhr.response;
  //       reject(new Error('Something went wrong!'));
  //     }
  //     // const listOfPosts = JSON.parse(xhr.response);
  //   };

  //   xhr.onerror = function() {
  //     reject(new Error('Failed to send request!'));
  //   };

  //   xhr.send(JSON.stringify(data));
  // });

  // return promise;

  return fetch(url, {
    method: method,
    // body: JSON.stringify(data),
    body: data
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then(errData => {
          console.log(errData);
          throw new Error('Something went wrong - server-side.');
        });
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error('Something went wrong!');
    });
}

// Changed, using axios: 
async function fetchPosts() {
// This axios.get method returns a promise, axios always uses promises:  
  try {
    const response = await axios.get(  // Here I don't need 'GET' anymore, just the url.
      'https://jsonplaceholder.typicode.com/posts'  
    );
    console.log(response);  // Logs an object, with the data automatically converted: {data: Array(100), …}
    const listOfPosts = response.data;  // So listOfPosts = response.data, because I have that data property on the response object.
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
    console.log(error.response);  // To look into the response that caused the error.
  }
}

// Changed, using axios:
async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  const fd = new FormData(form);
  // fd.append('title', title);
  // fd.append('body', content);
  fd.append('userId', userId);

  // Here I don't need 'POST' anymore, just the url and the data I want to append (post or fd):
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    post  // Here I can use fd instead.
  );
  console.log(response);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

// Changed, using axios:
postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    // Here I don't need 'DELETE' anymore, just the url:
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});

/* Notes: axios is a globally available variable now, it's made available by the script 
import (in the html file). Axios is an object which has methods: get, post, put, delete.
Axios is simple working with errors, unlike the fetch API and unlike XMLHttpRequest, axios 
doesn't treat technically successful responses which have a response status code as successful, 
instead it does the same thing I manually build in sendHttpRequest, axios throws an error if 
I get a response that technically succeeded, so that was delivered without problems but that 
has a 400 or 500 status code. So it doesn't just throw an error if I have a technical problem 
like a network connectivity issue, it also throws an error if I have a technically correct 
response with an error status code. 
For posting, axios analyzes the body I'm appending and then behaves correctly to set the right 
headers and convert the data correctly to JSON or to FormData.
*/