const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/rihanna", function(req, res) {
  res.send("Work work work work work");
});

// Export the router, to be used in server js file
module.exports = router;
