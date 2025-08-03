const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  name: { type: String },
  country: { type: String },
  duroodCount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

submissionSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Submission", submissionSchema);
