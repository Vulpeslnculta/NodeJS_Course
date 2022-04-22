const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/main");


const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);
app.listen(3000);