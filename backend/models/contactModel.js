const db = require("../config/db");

const createContact = (data, callback) => {
  const sql =
    "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [data.name, data.email, data.subject, data.message], callback);
};

const fetchContacts = (callback) => {
  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, callback);
};

module.exports = {
  createContact,
  fetchContacts,
};
