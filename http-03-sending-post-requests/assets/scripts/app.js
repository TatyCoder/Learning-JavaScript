const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

// Wrapping the HttpRequest sending logic into a separate reusable function, promisifying it:
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);  // Changed: method and url parameters, for flexibility.

    xhr.responseType = 'json';

    xhr.onload = function() {
      resolve(xhr.response);  // Here forward xhr.response because that's the response data.
      // const listOfPosts = JSON.parse(xhr.response);
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

// New function:
async function fetchPosts() {
  const responseData = await sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
}

// New function:
async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchPosts();
createPost('DUMMY', 'A dummy post!');