-- ===============================
-- CREATE DATABASE
-- ===============================
CREATE DATABASE IF NOT EXISTS passport_db;
USE passport_db;

-- ===============================
-- TABLE: APPLICANT
-- ===============================
CREATE TABLE applicant (
  applicant_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  dob DATE NOT NULL,
  gender ENUM('Male','Female','Other') DEFAULT 'Other',
  phone VARCHAR(15) UNIQUE,
  email VARCHAR(100) UNIQUE,
  address TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===============================
-- TABLE: APPLICATION
-- ===============================
CREATE TABLE application (
  application_id INT AUTO_INCREMENT PRIMARY KEY,
  applicant_id INT NOT NULL,
  documents_submitted TINYINT(1) DEFAULT 0,
  police_verification ENUM('Pending','Approved','Rejected') DEFAULT 'Pending',
  applied_date DATE DEFAULT (CURRENT_DATE),
  last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

  FOREIGN KEY (applicant_id) REFERENCES applicant(applicant_id)
);

-- ===============================
-- VIEW: STATUS LOGIC
-- ===============================
CREATE OR REPLACE VIEW application_status AS
SELECT
  a.application_id,
  a.applicant_id,
  p.name AS applicant_name,
  a.documents_submitted,
  a.police_verification,
  a.applied_date,
  a.last_updated,

  CASE
    WHEN a.documents_submitted = 0 THEN 'Pending'
    WHEN a.police_verification = 'Rejected' THEN 'Rejected'
    WHEN a.police_verification = 'Approved' AND a.documents_submitted = 1 THEN 'Passport Generated'
    WHEN a.police_verification = 'Approved' THEN 'Verified'
    ELSE 'Processing'
  END AS status

FROM application a
JOIN applicant p ON p.applicant_id = a.applicant_id;