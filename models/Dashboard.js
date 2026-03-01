const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
  partName: String,
  docNo: String,
  startDate: Date,
  expireDate: Date
});


module.exports = mongoose.model("Dashboard", dashboardSchema);
