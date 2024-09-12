const { model, models } = require("mongoose");
const CreditCard = require("../models/creditCard");

exports.getCreditCards = async (req, res) => {
  try {
    const creditCards = await CreditCard.find();

    res.json(creditCards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCreditCard = async (req, res) => {
  const creditCard = new CreditCard({
    bankName: req.body.bankName,
    creditCardName: req.body.creditCardName,
    enabled: req.body.enabled,
  });
  try {
    const newCreditCard = await creditCard.save();
    res.status(201).json(newCreditCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCreditCard = async (req, res) => {
  try {
    const updatedCreditCard = await CreditCard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCreditCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCreditCard = async (req, res) => {
  try {
    await CreditCard.findByIdAndDelete(req.params.id);
    res.json({ message: "Credit Card deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
