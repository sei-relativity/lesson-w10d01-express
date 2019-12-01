// Load the Express module on our server
const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/sightings", function(req, res) {
  console.log(req.params);
  console.log(req.route);
  console.log(req.params);

  res.send(
    `How many ufo sightings you think there are in that ${req.query.state}? ${req.query.sights}.`
  );
});

// Export the router, to be used in server js file
module.exports = router;
