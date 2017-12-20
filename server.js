var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Task = require('./api/models/todoListModel'),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost:27017/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log("Listening on port: " + port)