const express = require("express");
const router  = express.Router();

// Dummy Data
let people = [
  {
    firstName: "Moayad",
    lastName : "Alnuwaysir"
  },
  {
    firstName: "Abbas",
    lastName : "Alabbas"
  },
  {
    firstName: "Murtatha",
    lastName : "Almurtatha"
  },
  {
    firstName: "Fathiyah",
    lastName : "Alfathiyah"
  }
];

// api.domain.com || domain.com/api

// Get all people data
router.get("/api/people", (req, res) => {
  res.json({ people: people });
});

// Get Person by Record ID
router.get("/api/people/:id", (req, res) => {
  const personID = req.params.id;

  if (!isNaN(personID)) {
    const person = people[personID];

    if (person !== undefined) {
      res.json({ person: person });
    } else {
      res.status(404).json({ error: "Person Not Found" });
    }
  } else {
    // Invalid ID Case
    res.status(406).json({ error: "Invalid ID" });
  }
});

// Create a person
router.post("/api/people", (req, res) => {
  console.log(req.body);

  people.push(req.body.person);

  res.status(201).json({ people: people });
});

// Update a person
router.put("/api/people/:id", (req, res) => {
  const personID = req.params.id;

  if (!isNaN(personID)) {
    const person = people[personID];

    if (person !== undefined) {
      people[personID] = req.body;
      res.json({ person: req.body });
    } else {
      res.status(404).json({ error: "Person Not Found" });
    }
  } else {
    // Invalid ID Case
    res.status(406).json({ error: "Invalid ID" });
  }
});

// Delete a person
router.delete("/api/people/:id", (req, res) => {
  const personID = req.params.id;

  if (!isNaN(personID)) {
    const person = people[personID];

    if (person !== undefined) {
      people[personID] = {};
    } else {
      res.status(404).json({ error: "Person Not Found" });
    }
  } else {
    // Invalid ID Case
    res.status(406).json({ error: "Invalid ID" });
  }
});

module.exports = router;
// Exports the router so we can use it in the server.js file
