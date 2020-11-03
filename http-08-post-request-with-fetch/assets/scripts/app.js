const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();

  //   xhr.open(method, url);

  //   xhr.responseType = 'json';

  //   xhr.onload = function() {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
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

  // Changed, adding a second argument which should be an object where I configure the request:
  return fetch(url, {
    method: method,  
    /* method should be set to a string and by default it's set to 'GET', so I'll never need to 
    set this but I always need to set it to post, put, patch, delete if I plan on sending such a 
    request. I'll set it to 'method' pointing at the parameter I'm getting in the sendHttpRequest. 
    */
    body: JSON.stringify(data)
    /* I can also set the body and that has to be set to JSON data, to data converted to JSON 
    which I can do with JSON.stringify around data.
    */
  }).then(response => {
    return response.json();
  });
}

async function fetchPosts() {
  // try {
  const responseData = await sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    postEl.querySelector('li').id = post.id;
    listElement.append(postEl);
  }
  // } catch (error) {
  //   alert(error.message);
  // }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
