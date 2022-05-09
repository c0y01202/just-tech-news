<<<<<<< HEAD
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/");
=======
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
>>>>>>> main

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
<<<<<<< HEAD
  app.listen(PORT, () => console.log("Now listening"));
=======
  app.listen(PORT, () => console.log("Now listening on 3001"));
>>>>>>> main
});
