const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  result = "await Session.find({})";
  res.json({ result });
});

module.exports = router;
