const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
  },
  creditCardName: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('CreditCard', creditCardSchema);
