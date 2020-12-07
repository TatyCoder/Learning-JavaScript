const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';

// Local storage, easy to use key-value storage where I can store basic data:
// localStorage.setItem('uid', userId);

// Using local storage:
storeBtn.addEventListener('click', () => {
    localStorage.setItem('uid', userId);
});
retrBtn.addEventListener('click', () => {
    const extractedId = localStorage.getItem('uid');
    if (extractedId) {
        console.log('Got the id - ' + extractedId);
    } else {
        console.log('Could not find the id!');
    }
});

/* Notes: in local storage all that data can be manipulated by the user, so I should 
never treat this as the single source of truth but instead just as a starting point 
which I then could validate with some other mechanisms.
*/