const express = require("express");
const app= express()

app,use(express)

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

