const generateToken = require("../config/generateToken")

const auth = (req, res) => {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.status(200).json({token : generateToken(process.env.ADMIN_ID)});
    } else {
      res.status(400).json("Wrong Credentials!");
    }
};

module.exports = auth;
