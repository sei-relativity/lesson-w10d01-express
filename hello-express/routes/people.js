const express = require('express');
const router = express.Router();


let people = [
    {firstName: 'Usman', lastName: 'Bashir'},
    {firstName: 'Reem', lastName: 'AlHarbi'},
    {firstName: 'Mansour', lastName: 'Almohsen'},
    {firstName: 'Hazim', lastName: 'Alblowi'},
  ];

  // Get All People
  router.get('/api/people', function(req, res){
      res.json({ People: people});
  });

  //Get person by Record ID
//   app.get('/api/people/:id', function(req, res){
//       res.json({ person: people[req.params.id] });

//   });  

  router.get('/api/people/:id', function(req, res) {
    const personID = req.params.id;
  
    if(!isNaN(personID)) {
      const person = people[personID];
  
      if (person !== undefined) {
        res.json({ person: person });
      } else {
        res.status(404).json({ error: 'Person Not Found'});
      }
  
    } else {
      res.status(406).json({ error: 'Invalid ID' })
    }
  });

  // create a person 
app.post('/api/people', function(req, res) {
    console.log(req.body);
    people.push(req.body.person);
    res.status(201).json({ status: 'ok' });
  });

  / Post request
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

// Export the router so we can use it
// in the server.js file 