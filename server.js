const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(
//   process.env.MONGODB_URI ||
//     "mongodb://user1:password1@ds023042.mlab.com:23042/heroku_nmz4nm45",
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     // useMongoClient: true
//   }
// );


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});