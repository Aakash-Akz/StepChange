const mongoose = require("mongoose");

const form2Schema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  companyName: String,
});

const Form2 = mongoose.model("Form2", form2Schema, "form2");

module.exports = Form2;
