const express = require("express");

// Create a new express server
const router = express.Router();

router.get("/bigfoot", function(req, res) {
  console.log(req.route);
  console.log(req.query);

  if (req.query.blurry === "true") {
    res.send(
      "It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside! Run! He's fuzzy! Get out of there!"
    );
  } else {
    res.send(
      "A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence."
    );
  }
});

// Export the router, to be used in server js file
module.exports = router;
