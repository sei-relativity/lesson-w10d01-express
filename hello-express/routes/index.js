const express = require("express");
const router = express.Router();

// First previous version In Server.js
// app.get("/", (req, res) => res.send("Hello World!"));

router.get("/", (req, res) => res.json({ message: "Hello from SEI!" }));

module.exports = router;
// Exports the router so we can use it in the server.js file