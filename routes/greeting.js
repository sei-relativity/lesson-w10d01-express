// Load the Express module on our server
const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/greeting", function(req, res) {
  res.send("Hey, SEI Eternity!");
});
// Export the router, to be used in server js file
module.exports = router;
