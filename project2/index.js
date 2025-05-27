const express = require('express');
const app = express();
const port = 8080;

// Specifically parse the body of the json data and add it to the request.body object
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Correct usage

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send("hiteshdotcom");
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login in chai aur code</h1>');
});

app.get('/youtube', (req, res) => {
  res.send("this is some youtube");
});

//Use the postman to post the details and get the answer
app.post('/api/cars', (request, response) => {
  const { cars, brands } = request.body; // Corrected to request.body
  console.log(cars);
  console.log(brands);
  response.send("Details submitted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
