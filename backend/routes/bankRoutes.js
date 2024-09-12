const express = require("express");
const router = express.Router();
const bankController = require("../controllers/bankController");

router.get("/getBank", bankController.getBanks);
router.post("/addBank", bankController.createBank);

module.exports = router;
