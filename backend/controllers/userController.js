const registerUser = async (req, res) => {
   const { user, email, passsword, pic } = req.body;

   res.json({
      name,
      email
   })
}

module.exports = registerUser