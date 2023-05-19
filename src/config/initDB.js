const mongoose = require("mongoose");

const dbUri = "mongodb://127.0.0.1:27017/cubicle";

async function initDB() {
  await mongoose.connect(dbUri);
  console.log("connected DB");
}
module.exports = initDB;
