const mongoose = require("mongoose");

const acSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    mal_id : {
      type: Number,
      required : true
    },
    currentStatus: {
      type: Object,
      required: [true, "Something Went Wrong In Model"],
    },
    episode: {
      type: String,
      required: true
    },
    score: {
      type: String,
      required: true
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    rewatch: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
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
