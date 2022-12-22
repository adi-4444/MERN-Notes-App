const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")


const registerUser = asyncHandler(async (req, res) => {
   const { name, email, password, pic } = req.body;

   const userExists = await User.findOne({ email })

   if (userExists) {
      res.status(400)
      throw new Error("User Email Already Exists")
   }

   const user = await User.create({
      name,
      email,
      password,
      pic
   })

   if (user) {
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
         pic: user.pic
      })
   } else {
      res.status(400)
      throw new Error("Error Occurred !")
   }
})
const authUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email })

   if (user && (await user.matchPassword(password))) {
      res.json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
         pic: user.pic
      })
   } else {
      res.status(400)
      throw new Error("Invalid Email or Password !")
   }
})

module.exports = { registerUser, authUser }