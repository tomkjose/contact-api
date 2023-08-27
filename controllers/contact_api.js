const Contacts = require("../models/contact");

module.exports.create = async (req, res) => {
  console.log("req.body.name :>> ", req.body.name);
  try {
    const contact = new Contacts({
      id: new Date.now(),
      name: req.body.name,
      phone: req.body.phone,
    });
    const newContact = await contact.save();
    res.status(201).json({
      data: {
        contact: newContact,
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports.display = async (req, res) => {
  try {
    const contact = await Contacts.find();
    res.json({
      data: {
        contact: contact,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.destroy = async (req, res) => {
  try {
    const contact = await Contacts.findByIdAndDelete(req.params.id);

    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
