const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akashtembhare2002:Akz_6388@cluster0.kz2rhlw.mongodb.net/formdata?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database Connected");
  } catch (error) {
    console.error({ message: error });
  }
};

module.exports = connectDB;
