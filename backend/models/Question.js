const mongoose = require("mongoose");
const router = require("../routes");

const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer",
  },
  user: Object,
});

module.exports = mongoose.model("Question", QuestionSchema);
