const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/:name", function(req, res) {
  console.log(req.params);
  res.send(`Hello, ${req.params.name}!`);
});

// Export the router, to be used in server js file
module.exports = router;
