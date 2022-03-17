const jwt = require("jsonwebtoken");
const httpErrors = require("http-errors");

module.exports = {
  signAccessToken: (payload) => {
    // const payload = {
    //   id: "QVUompgj27e06EmbfHzk",
    //   name: "Rehan CH",
    //   email: "rehan.sarwar01@confiz.com",
    // };

    const secret = "kaljdlaksjflkah";
    const options = {};

    return new Promise((reseolve, reject) => {
      jwt.sign(payload, secret, options, (err, token) => {
        if (err) return reject(err);
        else return reseolve(token);
      });
    });
  },
};
