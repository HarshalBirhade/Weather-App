const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const port = process.env.port || 3000;

app.set("view engine", "hbs");
//Serve static file from public folder
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

const partialPath = path.join(__dirname, "../views/partials");
console.log(partialPath);

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  const data = {
    message: "Ooops! Page Not Found",
  };
  res.render("404", data);
});
app.listen(port, () => {
  console.log(`Project server started on ${port} port`);
});
