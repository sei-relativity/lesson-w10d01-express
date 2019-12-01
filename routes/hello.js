const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/hello/:name", function(req, res) {
  console.log(req.route);
  console.log(req.query);

  res.send({ params: req.params, queries: req.query });
});

// Export the router, to be used in server js file
module.exports = router;
