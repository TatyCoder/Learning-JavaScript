// This is a file which webpack will use to do its job //

/* To import in Node.js I use the 'require' function, where I pass 'path', which is a 
package built into Node.js. I want to use the path package so I store it in a constant: */
const path = require('path');

// To export in Node.js I use 'module.exports' and set this equal to a Javascript object:
module.exports = {
  /* webpack will use 'production' as a default mode. To start I set it to 'development', 
  so it doesn't do all the optimizations of 'production' mode: */
  mode: 'development',
  entry: './src/app.js',  // The entry point (it could be multiple entry points).
  output: {  // The output point.
    /* First, I specify the file name that should be generated. This will be one 
    code file which contains all the other merged code files: */
    filename: 'app.js',
    // Second, I set the path where I want to generate that file in:
    path: path.resolve(__dirname, 'assets', 'scripts'), 
    // With public path, I can tell webpack that the files are stored in a different path: 
    publicPath: 'assets/scripts/'
  }
};