require('dotenv').config()
const express = require('express')
const app = express()
const port = 5500

//Specifically parse the body of the josn data and add it to the request.body object
const bodyParser =require('body-parser')
app.use(bodyParser.json)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req , res) => {
    res.send("hiteshdotcom")
})

app.get('/login' , (req , res) => {
    res.send('<h1>Please login in chai aur code</h1>')
})

app.get('/youtube' , (req , res) => {
    res.send("this is some youtube")
})

app.post('/api/cars' , (request , response) => {
  const {cars , brands} = response.body;
  console.log(cars);
  console.log(brands);
  response.send("Details submitted");
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})