
var express = require("express");
var path = require("path");
var mongodb = require("mongodb");

var app = express();
var port = 3000;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const { runInNewContext, Script } = require("vm");
mongoose
  .connect(
    "mongodb+srv://new_user:knmorparia@cluster0.mu2jw.mongodb.net/cluster0?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

const userSchema = {
  name: { type: String, unique:false, required: true },

  nationality: { type: String, unique: false , required: true },
  designation: { type: String, unique: false , required: true },
  phone: { type: String, unique: false , required: true },
  date: { type: Date, unique: false , required: true },
  dateofjoining: { type: Date, unique: false , required: true },
  gender: { type: String, unique: false , required: true },
  code: { type: String, unique: false , required: true },
  city: { type: String, unique: false , required: true },
  duty: { type: String, unique: false , required: true },
  email: { type: String, unique: false , required: true },
  passport: { type: String, unique: false , required: true },
 service: { type: String, unique: false , required: true },
};
const User = mongoose.model("User", userSchema);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  console.log("route hit");
  let newUser = new User({
    name: req.body.name,
    nationality: req.body.nationality,
    designation: req.body.designation,
    phone: req.body.phone,
    date: req.body.date,
    dateofjoining: req.body.dateofjoining,
    gender: req.body.gender,
    code: req.body.code,
    city: req.body.city,
    duty: req.body.duty,
    email: req.body.email,
    passport: req.body.passport,
    service: req.body.service,
  });
  newUser.save()
  .then(item =>{
    res.send("Data saved");
  })
  console.log(newUser);
  res.redirect('/');
});
app.listen(3000, () => {
  console.log("Server listening on port " + port);
});

app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

