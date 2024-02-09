const mongoose = require("mongoose");

const form3Schema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  companyName: String,
});

const Form3 = mongoose.model("Form3", form3Schema, "form3");

module.exports = Form3;
