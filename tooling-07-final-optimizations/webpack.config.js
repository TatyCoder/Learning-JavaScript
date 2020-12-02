const path = require('path');
/* To clear my scripts folder with every build and then just add the 
newly generated files there to get rid of the old files: */
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  /* plugins is a concept in webpack which allows me to apply various 
  optimizations or transformations on the generated output: */
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};