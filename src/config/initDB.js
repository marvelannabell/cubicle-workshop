const mongoose = require("mongoose");
const config = require('./config');

// const dbUri = "mongodb://127.0.0.1:27017/cubicle";

// async function initDB() {
//   await mongoose.connect(config.DB_URI);
//   console.log("connected DB");
// }
async function initDB() {
  mongoose.set('strictQuery', false);

  await mongoose.connect(config.DB_URI);

  console.log('DB connected');
}
module.exports = initDB;
