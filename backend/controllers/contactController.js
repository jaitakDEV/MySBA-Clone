const Contact = require("../models/contactModel");

// SUBMIT CONTACT
const submitContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  Contact.createContact({ name, email, subject, message }, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
    });
  });
};

const getContacts = (req, res) => {
  Contact.fetchContacts((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    res.status(200).json({
      success: true,
      data: results,
    });
  });
};

module.exports = {
  submitContact,
  getContacts,
};
