const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
// New, to get access to these two elements:
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = function() {
      resolve(xhr.response);
      // const listOfPosts = JSON.parse(xhr.response);
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

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

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

// New:
// fetchButton.addEventListener('click', () => {
//   fetchPosts();
// });
// Shorter than previous code:
fetchButton.addEventListener('click', fetchPosts);  // fetchPosts without parentheses.
form.addEventListener('submit', event => {
  event.preventDefault();  // So that the browser does not submit the form.
  // To get the input from the field with the title and the content; currentTarget is the form:
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

/* Notes: the "Fetch" button always appends data without clearing existing data first. 
That means that pressing the button multiple times will add more and more items.
*/