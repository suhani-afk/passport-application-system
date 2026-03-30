function getStatus(app) {
  if (!app.documents_submitted) return "Pending";
  if (app.police_verification === "Approved" && app.documents_submitted)
    return "Passport Generated";
  if (app.police_verification === "Approved") return "Verified";
  return "Processing";
}

module.exports = getStatus;