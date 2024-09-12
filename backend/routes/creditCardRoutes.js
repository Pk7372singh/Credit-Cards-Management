const express = require("express");
const router = express.Router();
const creditCardController = require("../controllers/creditCardController");

router.get("/getCreditCard", creditCardController.getCreditCards);
router.post("/addCreditCardDetails", creditCardController.createCreditCard);
router.put("/:id", creditCardController.updateCreditCard);
router.delete("/:id", creditCardController.deleteCreditCard);

module.exports = router;
