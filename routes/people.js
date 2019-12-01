// Load the Express module on our server
const express = require("express");

// Create a new express server
const router = express.Router();

//  Dummy Data
let people = [
  { firstName: "Usman", lastName: "Bashir" },
  { firstName: "Reem", lastName: "Alharbi" },
  { firstName: "Mansour", lastName: "Almohsen" },
  { firstName: "Hazim", lastName: "Alblowi" },
  { firstName: "Mr", lastName: "P" }
];

//  Get all people
router.get("/api/people", function(req, res) {
  res.json({ people: people });
});

// Get Person by Record ID
router.get("/api/people/:id", function(req, res) {
  const personID = req.params.id;

  if (!isNaN(personID)) {
    const person = people[personID];
    if (person !== undefined) {
      res.status(200).json({ person: person });
    } else {
      res.status(404).json({ error: "Person Not Found" });
    }
  } else {
    // Invalid ID Case
    res.status(406).json({
      error: "Invalid ID"
    });
  }
});

// Create a Person
router.post("/api/people", function(req, res) {
  console.log(req.body);
  people.push(req.body.person);
  res.status(201).json({ people: people });
});

// Post request
router.post("/api/people", function(req, res) {
  console.log(req.body);
});

// Put request to the /user route
router.put("/api/people/:person_id", function(req, res) {
  const person_id = req.params.person_id;
  const person = people[person_id];

  if (!person) return res.status(404).json({});

  person.firstName = req.body.firstName;
  person.lastName = req.body.lastName;
  res.json(person);

  res.send("Got a PUT request at /user");
});

// Respond to a DELETE request to the /user route:

router.delete("/api/people/:person_id", function(req, res) {
  const person_id = parseInt(req.params.person_id);
  delete people[person_id];
  delayedSend(res, "");
});

// Export the router, to be used in server js file
module.exports = router;
