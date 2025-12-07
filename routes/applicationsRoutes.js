const express = require("express");
const router = express.Router();
const { applyJob } = require("../controllers/applicationsController");

router.post("/", applyJob);

module.exports = router;
