const express = require("express");

// Create a new express server
const router = express.Router();

app.get("/favorite/:item", function(req, res) {
  console.log(req.params);
  console.log(req.route);
  console.log(req.params);
  res.send(`my favorite ${req.params.item} is ${req.query[req.params.item]}.`);
});

// Export the router, to be used in server js file
module.exports = router;
