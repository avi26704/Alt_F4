const User = require("./user.js")
exports.register = async (req, res, next) => {
    const { Registration_number, password, role, block,Phone_number,room_number,  email,} = req.body
    if (password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try {
      await User.create({
        Registration_number,
        password,
        role,
        block,
        Phone_number,
        room_number,
        email,
      }).then(user =>res.status(200).json({
          message: "User successfully created",
          user,
        })
      )
    } catch (err) {
      res.status(401).json({
        message: "User not successful created",
        error: error.mesage,
      })
    }
  }

