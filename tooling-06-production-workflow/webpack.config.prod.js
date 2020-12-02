// This is a new file for Production // 

const path = require('path');

module.exports = {
  // Switch mode to production:
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  /* For production, I can either set this to none, to an empty string, or use 
  'cheap-source-map' which is what I will use to have some source mapping because 
  sometimes I also want to debug my production code: */
  devtool: 'cheap-source-map'
  // devServer: {
  //   contentBase: './'
  // }
};