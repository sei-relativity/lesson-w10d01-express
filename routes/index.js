// Load the Express module on our server
const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/", function(req, res) {
  res.json({ message: "Hello Universe!" });
});

// Export the router, to be used in server js file
module.exports = router;
