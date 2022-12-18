const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  th_name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  movieName: {
    type: String,
    required: true,
  },
  shows: {
    nine: [String],
    ten: [String],
    twelve: [String],
  },
});

module.exports = mongoose.model("Show", showSchema);
