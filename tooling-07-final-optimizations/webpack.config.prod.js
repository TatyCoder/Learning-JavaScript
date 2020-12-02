const path = require('path');
// New, same from webpack.config.js:
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
  /* contenthash is a keyword to webpack which tells webpack that a hash should 
  be generated here, a hash that is different whenever a file changed, if a file 
  didn't change, webpack will keep the existing hash: */
    filename: '[contenthash].js',  // This is a dynamic element.
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  // New, same from webpack.config.js:
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};