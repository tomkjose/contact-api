const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const Contacts = mongoose.model("Contacts", contactSchema);

module.exports = Contacts;
