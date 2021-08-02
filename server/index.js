const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const InfoRouter = require("./routes/education");
const TeacherRouter = require("./routes/teachersRoute");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", InfoRouter);
app.use("/", TeacherRouter);

mongoose.connect("mongodb://localhost:27017/education", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(5000, () => {
    console.log("app is runnin on ports 5000");
  });
});
