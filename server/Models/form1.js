const mongoose = require("mongoose");

const form1Schema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  companyName: String,
});

const Form1 = mongoose.model("Form1", form1Schema, "form1");

module.exports = Form1;
