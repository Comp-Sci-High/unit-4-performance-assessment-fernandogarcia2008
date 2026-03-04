const express = require("express");
const app= express()

app,use(express)


app.get("/", (req, res) => {
  res.sendFile(__dirname, "public", "home.html");
});

app.get("/blog", (req, res) => {
  res.render("blog", { posts });
});