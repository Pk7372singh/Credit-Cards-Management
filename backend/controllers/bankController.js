const Bank = require("../models/bank");

exports.getBanks = async (req, res) => {
  try {
    const banks = await Bank.find();

    res.json(banks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBank = async (req, res) => {
  const bank = new Bank({
    name: req.body.name,
  });
  try {
    const newBank = await bank.save();
    res.status(201).json(newBank);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
