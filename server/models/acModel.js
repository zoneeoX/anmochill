const mongoose = require("mongoose");

const acSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    currentStatus: {
      type: Object,
      required: [true, "Something Went Wrong In Model"],
    },
    episode: {
      type: String,
      required: true
    },
    currentAnime: {
      type: Object,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ac", acSchema);
