const express = require("express");
const { getAllInfo, addCourses } = require("../controllers/education");

const router = express.Router();

router.get("/info", getAllInfo);
router.post("/addcourse", addCourses);

module.exports = router;
