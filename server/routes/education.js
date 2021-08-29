const express = require("express");
const { getAllInfo, addCourses, removeCourse } = require("../controllers/education");

const router = express.Router();

router.get("/info", getAllInfo);
router.post("/addcourse", addCourses);
router.delete("/removecourse", removeCourse);

module.exports = router;
