const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

console.log("App is running");

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  // res.send('Something.');
  // res.sendFile(path.join(__dirname + '/views/todo.html'));
  res.render('todo.mustache');

});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
