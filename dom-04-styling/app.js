const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'blue-bg';

button.addEventListener('click', () => {
  // if (section.className === 'blue-bg visible') {
  //   section.className = 'blue-bg invisible';
  // } else {
  //   section.className = 'blue-bg visible';
  // }

  //   section.classList.toggle('visible');
  section.classList.toggle('invisible'); // classList conveniently toggles CSS classes!
});
