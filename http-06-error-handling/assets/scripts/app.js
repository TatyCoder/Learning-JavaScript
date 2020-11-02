const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

// Changed, error handling:
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = 'json';

    // I have proper handling for server side errors by checking the status code:
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {  // Which indicates a success case.
        resolve(xhr.response);
      } else {
        reject(new Error('Something went wrong!'));
      }
    };

    /* New, the .onerror handler will trigger if I technically fail to send a request, 
    for example if I have a network error, no internet connection. This error function 
    won't kick in for HttpRequests that are technically successful where I just have a 
    server side error, so where I just get back a non-200 status code:
    */
    xhr.onerror = function() {
      reject(new Error('Failed to send request!'));      
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

/* Changed, the normal way of handling this on promises is with catch blocks or   
when using async-await, with the help of try-catch to make sure I don't continue   
if I have a problematic promise here:
*/
async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/pos' // Invalid URL (it should end with /posts).
    );
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
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
