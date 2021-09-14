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

const userList = async (req, res) => {
  try {
    const foundedUserlist = await userModel.find({}).select("email name");
    res.status(200).send(foundedUserlist);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteUserAccount = async (req, res) => {
  try {
    const { id } = req.query;
    await userModel.findOneAndDelete({ _id: id });
    res.status(200).send({ message: "Account succesfully Deleted" });
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = {
  register: register,
  login: login,
  userList: userList,
  deleteUserAccount: deleteUserAccount,
};
