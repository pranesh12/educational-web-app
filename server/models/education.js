const mongoose = require("mongoose");
const { Schema } = mongoose;

const infoSchama = new Schema(
  {
    type: {
      type: String,
      require,
    },
    subType: {
      type: String,
      require,
    },
    createdBy: {
      type: String,
      require,
    },
    data: {
      type: [],
      require,
    },
  },
  { timestamps: true }
);

const infoModel = mongoose.model("infos", infoSchama);

module.exports = infoModel;
