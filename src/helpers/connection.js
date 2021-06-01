const mongoose = require("mongoose");
const { DBURL, PORT } = require("./environment");

const connectDB = new Promise((resolve, reject) => {
  try {
    mongoose.connect(DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log(`DB Connection successfull on url ${DBURL}`);
    resolve(PORT);
  } catch (err) {
    console.error(error);
    reject(error);
  }
});

module.exports = connectDB;
