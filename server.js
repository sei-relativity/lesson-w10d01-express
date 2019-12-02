
//load express js
const express =require('express') ; 

//create a new express server 
const app=express(); 

//middleware 
// Parse JSON request sent by the user
// and convert it into JS Object before
// a Route uses it.
app.use(express.json()); 

// tells the server where to listen for request 
const port =3000 ; 

//dumy data 
let people=[
    {firstName:'sara',lastName:'omar'},
    {firstName:'shahad',lastName:'omar'},
    {firstName:'nora',lastName:'omar'},
    {firstName:'abdullah',lastName:'omar'},
]; 

app.get('/api/people',function(req,res){
res.json({people: people});
});


app.get('/api/people/:id', function(req, res) {
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

  // Create a Person
  app.post('/api/person', function(req, res) {
    people.push(req.body.person);
    res.status(201).json({ people: people });
  });


















app.get('/sightings', function(req, res){
    console.log(req.route); 
    console.log(req.query); 
  
    res.send(`How many ufo sightings you think there are in that ${req.query.state}? ${req.query.sights}.`);
  });

  app.get('/bigfoot', function(req, res){
  
    if (req.query.blurry === "true") {
      res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside! Run! He's fuzzy! Get out of there!");
    } 
    else {
      res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");
    }
  });


app.get('/hello/:name',function(req,res){
    res.send({params:req.params, queries:req.query});

}); 

app.get('/favorite/:noun', function(req, res) {
    if (req.query[req.params.noun]) {
      res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}.`);
    } else {
      res.send(`I have a favorite ${req.params.noun}.`);
    }
    console.log({params: req.params, queries: req.query});
  });



app.listen(port,function(){
// tells the server where to listen for request on port 3000
console.log(`hello express !listening on port : ${port}`);
});

  app.get('/greeting', function(req, res) {
    res.send('Hey, SEI Eternity!');
  });
  
  app.get('/rihanna', function(req, res) {
    res.send("Work work work work work");
  });

  app.get('/:name', function(req, res) {
    console.log(req.params);
    console.log(req.route);
    console.log(req.query);
    res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}.`);
  });


  app.get('/food/:food',function(req,res) {
     
    res.send(`I really love ${req.params.food}`);
}); 



  {
    state:`<the state passed in>`;
    sights: `<how many ufo sightings you think there are in that state>`
  }
