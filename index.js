// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 

const posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    date: "2026-03-01",
    excerpt: "A quick intro to what I’ll be writing about here.",
    content:
      "This is my personal blog where I share projects, lessons learned, and things I find interesting. Expect code, life updates, and experiments."
  },
  {
    id: 2,
    title: "Learning Express + EJS",
    date: "2026-03-02",
    excerpt: "Why I like server-side rendering for small projects.",
    content:
      "EJS is simple and great for smaller sites. Express makes routing easy, and you can still serve static assets from a public folder."
  },
  {
    id: 3,
    title: "My Study Routine",
    date: "2026-03-02",
    excerpt: "How I plan my week and avoid burnout.",
    content:
      "I use time blocks, short breaks, and a weekly review. The best routine is the one you can actually stick to."
  },
  {
    id: 4,
    title: "A Small Project I’m Proud Of",
    date: "2026-03-03",
    excerpt: "Building something tiny but complete feels amazing.",
    content:
      "Finishing a small project teaches you more than starting ten large ones. Scope small, ship fast, learn a lot."
  },
  {
    id: 5,
    title: "What I’m Reading Right Now",
    date: "2026-03-03",
    excerpt: "A few books/articles that are shaping my thinking.",
    content:
      "Right now I’m reading a mix of programming, psychology, and design. I like rotating topics so I don’t get bored."
  }
];


// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 


// 6) Add static file middleware here
app.use(express.static(path.join(__dirname, "public")));

// 7) Set the view engine to ejs here
app.set("view engine", "ejs");

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get("/", (req, res) => {
  res.sendFile((__dirname, "public", "index.html"));
});


// 9) Create a route handler to your overview route from your planning document
// Pass in your data array

app.get("/overview", (req, res) => {
  res.render("overview", { posts });
});


// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})