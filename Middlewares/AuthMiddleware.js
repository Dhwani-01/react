const User=require("../Models/UserModel");
require("dotenv").config();
const jwt=require("jsonwebtoken");

module.exports.userVerification = (req, res , next) => {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await User.findById(decoded.id)
        if (user){
           req.user=({  email: user.email ,superuser: user.superuser})
           return next()
        }
        else return res.json({ status: false })
      }
    })
   
  }