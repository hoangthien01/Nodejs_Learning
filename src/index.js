const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { create } = require("express-handlebars");
const app = express();
const port = 3000;
//config handler bars
const hbs = create({
  extname: ".hbs",
});

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//__dirname is current path to root (src)
// set views folder for template engine(handlebars) follow new constructor
app.set("views", path.join(__dirname, "resources\\views"));

app.get("/", (req, res) => {
  // res.send(`<div>Thien</div>`);
  res.render("home");
});

app.get("/news", (req, res) => {
  // res.send(`<div>Thien</div>`);
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
