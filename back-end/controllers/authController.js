const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

exports.signup = async (req, res) => {
  try {
    const {
      name,
      address,
      email,
      password,
      phoneNumber,
      isAdmin,
      codeAdmin 
    } = req.body;

    if (isAdmin && codeAdmin !== "rbk-troc2023") {
      return res.status(400).json({ message: "Invalid admin code" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      address,
      email,
      password: hashedPassword,
      phoneNumber,
      isAdmin,
      codeAdmin,
    });

    const token = generateToken(newUser);

    res.json({ token, type: isAdmin ? "admin" : "user" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
