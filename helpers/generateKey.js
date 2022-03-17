const crypto = require("crypto");

module.exports = {
    logNewSecretKeys:()=>{
      const accessTokenSecret = crypto.randomBytes(32).toString("hex");
     const refreshTokenSecret = crypto.randomBytes(32).toString("hex");

       console.table({accessTokenSecret, refreshTokenSecret});
    }
}
