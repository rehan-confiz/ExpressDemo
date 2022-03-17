const express = require("express");
const router = express.Router();
var admin = require("firebase-admin");
let db = admin.firestore();
var constants = require("../constants/Constants");

router.post("/create", async (req, res) => {
  console.log(req.body);
  let docRef = db.collection(constants.USER_COLLECTION).doc();
  await docRef.set({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.json({ message: `${req.body.name} user is created successfully.` });
});

router.post("/update/:id", async (req, res) => {
  console.log(req.body);
  let docRef = db.collection(constants.USER_COLLECTION).doc(req.params.id);
  //We can also user .update() to update any specific field like name, email
  await docRef.set({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.json({ message: `Data is updated against this user ${req.params.id}` });
});

router.get("/get_users", async (req, res) => {
  let users = [];
  const usersSnapshot = await db.collection(constants.USER_COLLECTION).get();
  if (usersSnapshot.docs.length > 0) {
    for (const user of usersSnapshot.docs) {
      users.push({
        id: user.id,
        ...user.data(),
      });
    }
  }
  res.json({ message: "All users", users: users });
});

router.post("/delete/:id", async (req, res) => {
  await db.collection(constants.USER_COLLECTION).doc(id).delete();
  res.json({ message: "Deleted Successfully" });
});

module.exports = router;