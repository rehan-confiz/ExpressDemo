var constants = require("./constants/Constants");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const {logNewSecretKeys}= require("./helpers/generateKey")
// logNewSecretKeys()
const port = process.env.PORT;
const dbURL = process.env.DB_URL;

//Firebase Setup
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccounKeys.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbURL,
});

//custom routers
app.use(require("./routes/firesetore"));

app.post("/api/login", (req, res) => {
  //Mock User
  const user = {
    id: "QVUompgj27e06EmbfHzk",
    name: "Rehan CH",
    email: "rehan.sarwar01@confiz.com",
  };

  jwt.sign({ user: user }, "Secret_Key", (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(port, () => {
  console.info(`Running on ${port}`);
});
