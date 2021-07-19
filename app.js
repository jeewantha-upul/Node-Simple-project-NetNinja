const { render } = require("ejs");
const express = require("express");
// const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoute");
const Blog = require("./models/blog");

const app = express();

// //connrct to databse
const dbURL =
  "mongodb+srv://netninja:12345@note-tuts.tuidx.mongodb.net/note-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    console.log("database connected");
  })
  .catch((err) => console.log(err));

//Middleware and Static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));

app.set("view engine", "ejs");

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
