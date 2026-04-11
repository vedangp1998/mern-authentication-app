const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const sessionModel = mongoose.model("Session", sessionSchema);

module.exports = sessionModel;
