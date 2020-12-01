const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-module-eval-source-map'
  /* devServer can be an object where I set a contentBase key. 
  This tells dev server where the root HTML file can be found: */
  // devServer: {
  //   contentBase: './'  
  // }
  // ./ it's the same folder as the config file, therefore I can omit it because this is the default.
};