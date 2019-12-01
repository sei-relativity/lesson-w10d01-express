const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/write", function(req, res) {
  res.send(req.query.w);
});

// Export the router, to be used in server js file
module.exports = router;
