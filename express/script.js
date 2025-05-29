import express from "express";

const app = express();

app.use(express.login());
app.use(express.urlencoded({ exntended:true }));

app.use(function (req, res, next) {
  console.log("Bhai yeh middleware chal toh raha hain");
  next();
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", function (req, res) {
  res.send("Welcome bro to your first route. This is changin while you are writing it");
});

app.listen(3000);