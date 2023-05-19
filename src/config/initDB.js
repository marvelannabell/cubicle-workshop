const mongoose = require("mongoose");
const config = require('./config')

const dbUri = "mongodb://127.0.0.1:27017/cubicle";

async function initDB() {
  await mongoose.connect(config.DB_URI);
  console.log("connected DB");
}
module.exports = initDB;
