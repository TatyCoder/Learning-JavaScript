const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// This tells Express that the engine for parssing my views, my template should be 'ejs' (it will look for a .ejs extension):
app.set('view engine', 'ejs');

// To tell Express where it finds my views:
app.set('views', 'views');  // 'views' is the folder where I store a template which contains HTML static and dynamic content.

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  const userName = req.body.username || 'Unknown User';
  // To render a view as a response:
  res.render('index', {
    user: userName  // I set 'user' key to 'userName' (which is the value in const userName).
  });
});

app.listen(3000);

/* Notes: the response object has a render method, also added by Express.js, this doesn't exist in Node.js.
The render method takes a couple of arguments: the first argument is the name of the view I want to render 
and that is 'index' because I have the index.ejs file in the views folder. The second argument would be an 
object full of properties or full of data I want to provide to this template and here I should provide a 
'user' property because that will be the data ejs then can use when it parses this template.
*/