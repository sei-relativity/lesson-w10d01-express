const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
  res.json({ message: 'Hello from SEI!' });
});

let people = [
  { firstName: 'Lamees', lastName: 'Alfallaj' },
  { firstName: 'Hend', lastName: 'Alwohib' },
  { firstName: 'Hajer', lastName: 'Alaqil' },
  { firstName: 'Nourah', lastName: 'Alzamil' },
]

//get all people
router.get('/api/people', function (req, res) {
  res.json({ people: people })

});

//add a new person
router.post('/api/people', function (req, res) {
  console.log(req.body)
  people.push(req.body.person)
  res.status(201).json({ status: 'ok' })

});

//get person by ID
router.get('/api/people/:id', function (req, res) {
  const personID = req.params.id;
  if (!isNaN(personID)) {
    const person = people[personID];
    if (person !== undefined) {
      res.json({ person: person })
    } else {
      res.status(404).json({ error: 'Person Missing' })
    }
  }else{
    res.status(406).json({ error: 'not a number' })

  }
});


router.put('/api/people/:id', function (req, res) {
  const personID = req.params.id;
  console.log(people[personID])
  if (!isNaN(personID)) {
    const person = people[personID];
    if (person !== undefined) {
      people[personID] = req.body.person
    } else {
      res.status(404).json({ error: 'No Such Person' })
    }
  }else{
    res.status(406).json({ error: 'not a number' })
  }
});


router.delete('/api/people/:id', function (req, res) {
  const personID = req.params.id;
  if (!isNaN(personID)) {
    const person = people[personID];
    if (person !== undefined) {
          people.splice(personID,1)
    } else {
      res.status(404).json({ error: 'No Such Person' })
    }
  }else{
    res.status(406).json({ error: 'not a number' })

  }
});

module.exports = router;
// Export the router so we can use it
// in the server.js file