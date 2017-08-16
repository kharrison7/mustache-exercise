const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const bodyParser = require('body-parser');

const app = express();

console.log("App is running");

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views')

//Listening on root
app.get('/todo/', function (req, res) {
  console.log(req.additions); //This will print the array of values.

  // TODO write your code here
  // res.send('Something.');
  // res.sendFile(path.join(__dirname + '/views/todo.html'));
  // res.render('index', { name: 'Lila' } );
  //



  res.render('todo.mustache', { name: 'A Todo List:',
                                text1: 'Learn Node Basics',
                                text2: 'Learn Express Basics',
                                text3: 'Learn Mustache',
                                text4: 'Learn HTML forms with Expresss',
                                text5: 'Learn about authentication',
                                text6: 'Learn how to connect to PostgreSQL',
                                text7: 'Learn how to create databases',
                                text8: 'Learn SQL',
                                text9: 'Learn how to connect to PostgreSQL from Node',
                                text10: 'Learn how to use Sequelize',



                                  "strike": function () {
                                    return function (text, render) {
                                      return "<s>" + render(text) + "</s>";
                                    };
                                  }


 });

});

let additions = [];
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Additions Array: " + additions);
app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
};



app.listen(3000, function () {
  console.log('Successfully started express application!');
});
