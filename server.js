require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// serve react front-end files
const path = __dirname + "/app/views/public";
app.use(express.static(path));

// allow cors from port 8081 and 3000
var corsOptions = {
  origin: "http://localhost:8081",
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set up db
const db = require("./app/models");
// db.sequelize.sync(); //production mode

// dev mode only (drop existing tables and re-sync )
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// register the routes
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to azou web application for vertical saas!" });
// });

// serve the front-end static files
app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

require("./app/routes/medicine.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
