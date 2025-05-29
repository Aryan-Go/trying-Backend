const express = require('express');
const app = express();

const path = require('path')

//These are called parsers
app.use(express.json());
app.use(express.urlencoded({ exntended: true }));

//We are able to use public files
app.use(express.static(path.join(__dirname, 'public')));

//In this we are able to render ejs files
app.set('view engine', 'ejs');

//Here we are routing
app.get('/', function (req, res) {
    res.render("index.ejs")
});

app.get("/profile/:kuchbhi", function (req, res) {
    const username = req.params.kuchbhi
  res.send("Hello "+ username);
});

app.get("/data/:username/:age", function (req, res) {
  const username = req.params.username;
  const age = req.params.age;
  res.send("Hello " + username + " Age = " + age);
});

//Here we are just listening to the requests
app.listen(3000, function () {
    console.log("It is running")
});