const courseModel = require("../models/education");

const getAllInfo = async (req, res) => {
  try {
    const info = await courseModel.find({});
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

const addCourses = async (req, res) => {
  try {
    const { type, subType, article, createdBy, header, vedio, img } = req.body;
    await courseModel.create({
      type,
      subType,
      createdBy,
      data: {
        image: img,
        header,
        article,
        vedio,
      },
    });
    res.json({ meassage: "course Created succesfuly" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllInfo: getAllInfo,
  addCourses: addCourses,
};
