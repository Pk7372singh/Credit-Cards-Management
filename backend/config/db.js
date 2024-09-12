const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URI;
const connectDB = mongoose.connect(MONGO_URL);
module.exports = connectDB;
