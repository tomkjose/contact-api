const Contacts = require("../models/contact");

module.exports.create = async (req, res) => {
  console.log("req.body.name :>> ", req.body.name);
  try {
    const contact = new Contacts({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    console.log("contact", contact);
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

    console.log("contact", contact);
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
