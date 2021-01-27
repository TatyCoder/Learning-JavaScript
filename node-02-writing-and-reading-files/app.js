// To use the module 'file system' (fs):
const fs = require('fs');  // I store the required data in my own constant.

// I can work with the filesystem object:
fs.readFile('user-data.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile('user-data.txt', 'username=Max', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Wrote to file!');
  }
});

/* Notes: instead of using the import and export keywords, in 
Node.js I use 'require' to require a module provided by Node.js. 
A new file being added to my system where my data was written to: user-data.txt
*/