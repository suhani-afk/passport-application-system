const model = require('../models/applicationModel');

// GET ALL
exports.getAll = (req, res) => {
  model.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// GET ONE
exports.getOne = (req, res) => {
  model.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

// CREATE
const db = require('../config/db');

exports.create = (req, res) => {
  const {
    name,
    dob,
    address,
    documents_submitted,
    police_verification
  } = req.body;

  // STEP 1: Insert applicant
  const applicantQuery = `
    INSERT INTO applicant (name, dob, address)
    VALUES (?, ?, ?)
  `;

  db.query(applicantQuery, [name, dob, address], (err, result) => {
    if (err) return res.status(500).json(err);

    const applicant_id = result.insertId;

    // STEP 2: Insert application
    const applicationQuery = `
      INSERT INTO application 
      (applicant_id, documents_submitted, police_verification)
      VALUES (?, ?, ?)
    `;

    db.query(
      applicationQuery,
      [applicant_id, documents_submitted, police_verification],
      (err2) => {
        if (err2) return res.status(500).json(err2);

        res.json({
          message: "Application + Applicant Created",
          applicant_id
        });
      }
    );
  });
};

// UPDATE
exports.update = (req, res) => {
  model.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Updated Successfully" });
  });
};

// DELETE
exports.delete = (req, res) => {
  model.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deleted Successfully" });
  });
};