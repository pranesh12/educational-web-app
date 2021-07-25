const express = require("express");
const { getAllInfo } = require("../controllers/education");
const router = express.Router();

router.get("/info", getAllInfo);

module.exports = router;
