const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const bankRoutes = require("./routes/bankRoutes");
const creditCardRoutes = require("./routes/creditCardRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/banks", bankRoutes);
app.use("/api/credit-cards", creditCardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log(`Server is running on port ${PORT} and DB is connected`);
  } catch (error) {
    console.error("Something went wrong :", error);
  }
});
