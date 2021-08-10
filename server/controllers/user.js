const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hasAccount = await userModel.findOne({ email: email });
    if (!hasAccount) {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await userModel.create({
        name: name,
        email: email,
        password: hashedPassword,
      });
      const result = await {
        name: newUser.name,
        email: newUser.email,
      };
      res.status(201).json(result);
    }
    res.send({ meassage: "Already Have an account" });
  } catch (error) {
    res.send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const oldUser = await userModel.findOne({ email: email });
    if (!oldUser) res.status(404).json({ meassage: "No user found" });
    const matchPassword = await bcrypt.compare(password, oldUser.password);
    if (!matchPassword) res.status(404).json("Passord incorrect");
    const result = {
      name: oldUser.name,
      email: oldUser.email,
    };
    res.status(200).json(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  register: register,
  login: login,
};
