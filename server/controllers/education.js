const infoModel = require("../models/education");

const getAllInfo = async (req, res) => {
  try {
    const info = await infoModel.find({});
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllInfo: getAllInfo,
};
