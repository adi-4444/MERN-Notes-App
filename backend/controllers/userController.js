const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");


const registerUser = asyncHandler(async (req, res) => {
   const { name, email, password } = req.body;

   const userExists = await User.findOne({ email })

   if (userExists) {
      res.status(400)
      throw new Error("User Email Already Exists")
   }

   const user = await User.create({
      name,
      email,
      password,
   })

   if (user) {
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
         token: generateToken(user._id)
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
         token: generateToken(user._id)
      })
   } else {
      res.status(400)
      throw new Error("Invalid Email or Password !")
   }
})

const userProfileUpdate = asyncHandler(async (req, res) => {
   const { email } = req.body;
   const user = await User.findById(req.user._id)
   const userExists = await User.findOne({ email })
   if (userExists) {
      res.status(400)
      throw new Error("User Email Already Exists")
   }
   if (user.email === userExists) return
   if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
         user.password = req.body.password
      }
      const updatedUser = await user.save()
      res.json({
         _id: updatedUser._id,
         name: updatedUser.name,
         email: updatedUser.email,
         token: generateToken(updatedUser._id)
      })
   } else {
      res.send(404)
      throw new Error("User Not Found")
   }
})

module.exports = { registerUser, authUser, userProfileUpdate }