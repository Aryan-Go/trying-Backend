import express from 'express' //Here we might get error that this is not allowed so for that we need to make its type as module
//in the package.json so that it is able to allow this import.

const app = express()

app.get('/' , (req , res) => {
    res.send("It is working")
})

app.get("/jokes" , (req , res) => {
    const jokes = [
        {
          id: 1,
          title: "Programming Joke",
          joke: "Why do programmers prefer dark mode? Because the light attracts bugs!"
        },
        {
          id: 2,
          title: "Math Joke",
          joke: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
        },
        {
          id: 3,
          title: "Technology Joke",
          joke: "Why don't programmers like nature? It has too many bugs."
        },
        {
          id: 4,
          title: "Code Humor",
          joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem!"
        },
        {
          id: 5,
          title: "Computer Joke",
          joke: "Why did the computer break up with the internet? There was no connection."
        },
        {
          id: 6,
          title: "Network Joke",
          joke: "Why do network engineers always have such bad parties? Because they can't find the right IP address!"
        },
        {
          id: 7,
          title: "Java Joke",
          joke: "What’s a Java developer’s favorite type of music? Algo-rhythm."
        },
        {
          id: 8,
          title: "Web Dev Joke",
          joke: "Why did the HTML file go to therapy? Because it had too many issues with its tags."
        },
        {
          id: 9,
          title: "Tech Support Joke",
          joke: "I told my computer I needed a break, and now it won’t stop sending me to the beach."
        },
        {
          id: 10,
          title: "AI Joke",
          joke: "Why did the AI go to school? To improve its neural network!"
        }
      ];
      res.send(jokes);
      //To read the data of the array when on the website is to go to json formatter and then format it in the form of a tree
      //So that your are easily able to read all the required data
})

const port = process.env.PORT || 5500;

app.listen(port , () => {
    console.log(`Serve at http://localhost:${port}`) 
})

app.get