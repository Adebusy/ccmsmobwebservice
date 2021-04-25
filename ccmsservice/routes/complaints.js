const express = require("express");
const router = express.Router();
const {
  logNewComplaint,
  getComplainsByEmail,
  getAllComplains
} = require("../model/complaintsmodel");

router.post("/logComplaint/", logNewComplaint);
router.get("/getComplainsByEmail/:email", getComplainsByEmail);
router.get("/getAllComplains/", getAllComplains);

module.exports = router;
