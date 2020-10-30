const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

// Wrapping the HttpRequest sending logic into a separate reusable function, promisifying it:
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);  // Changed: method and url parameters, for flexibility.

    xhr.responseType = 'json';  // Response type will always be JSON.

    xhr.onload = function() {
      resolve(xhr.response);  // Here forward xhr.response because that's the response data.
      // const listOfPosts = JSON.parse(xhr.response);
    };

    xhr.send(JSON.stringify(data));  // To append data to the outgoing request.
  });

  return promise;
}

// New function:
async function fetchPosts() {
  // I would get the response data here by awaiting for the response of sendHttpRequest:
  const responseData = await sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  );
  const listOfPosts = responseData;  // Now store responseData in listOfPosts.
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
}

// New function, a request that adds data on the server:
async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
  // With the 3rd argument this will be converted to JSON and attached to the outgoing request.
}

fetchPosts();
createPost('DUMMY', 'A dummy post!');

/* Notes: for a post request where I want to create data on the server, I need to add 
the data I want to create to the outgoing request and to do that, I need to tweak the 
sendHttpRequest function by adding the 'data' argument.
*/