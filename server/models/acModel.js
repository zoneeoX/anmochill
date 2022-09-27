const mongoose = require("mongoose");

const acSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: Object,
      required: [true, "Something Went Wrong In Model"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ac", acSchema);