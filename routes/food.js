// Load the Express module on our server
const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/food/:food", function(req, res) {
  console.log(req.params);
  res.send(`I really love ${req.params.food}.`);
});

// Export the router, to be used in server js file
module.exports = router;
