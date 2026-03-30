const db = require('../config/db');

// GET ALL (FROM VIEW)
exports.getAll = (callback) => {
  db.query("SELECT * FROM application_status", callback);
};

// GET ONE
exports.getById = (id, callback) => {
  db.query(
    "SELECT * FROM application_status WHERE application_id = ?",
    [id],
    callback
  );
};

// CREATE
exports.create = (data, callback) => {
  db.query("INSERT INTO application SET ?", data, callback);
};

// UPDATE
exports.update = (id, data, callback) => {
  db.query(
    "UPDATE application SET ? WHERE application_id = ?",
    [data, id],
    callback
  );
};

// DELETE
exports.delete = (id, callback) => {
  db.query(
    "DELETE FROM application WHERE application_id = ?",
    [id],
    callback
  );
};