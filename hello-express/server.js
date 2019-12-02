// Load the Express module on our  server 
const express = require('express');

const peopleRouter = require("./routes/people");

// Create a new express server
const app = express();

/*** Middleware ***/
// Parse JSON request sent by the user
// and convert it into JS Object before
// a Route uses it.
app.use(express.json());


/* Routes */
app.use('/', indexRouter);
app.use(peopleRouter);

// Tell the server where to listen for request 
const port = 3000 ;


// Dummy Data


app.get ('/', function(req, res){
    res.send('Hello SUMAYAH!');
});

app.get('/greeting', function(req, res) {
    res.send('Hey, SEI Eternity!');
  });

  app.get('/rihanna', function(req, res) {
    res.send("Work work work work work");
  });



  app.get('/favorite/:noun', function(req, res) {
    if (req.query[req.params.noun]) {
      res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}.`);
    } else {
      res.send(`I have a favorite ${req.params.noun}.`);
    }
    console.log({params: req.params, queries: req.query});
  });



  app.get('/sightings', function(req, res){
    console.log(req.route); //just to checkout the server logs
    console.log(req.query); //just to checkout the server logs
    res.send(`How many ufo sightings you think there are in that ${req.query.state}? ${req.query.sights}.`);
  });


  // http://localhost:3000/bigfoot?blurry=true 
  app.get('/bigfoot', function (req, res){
      if (req.query.blurry === 'true') {
          res.send("its test and try ")
      }
      else{
        res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");

      }
  })

  // .... /hello/:name?human=true
  app.get('/hello/:nmae', function (req, res){
    res.send({params: req.params, queries: req.query});
});


// localhost:3000/sumyah?first_name=sama&last_name=sami      
  app.get('/:name', function(req, res){
      console.log(req.params);
      console.log(req.route);
      console.log(req.query);

      res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}`);
  });



   // .. /foos/:food
  app.get('/food/:food', function(req, res){
    console.log(req.params);
    res.send(`i really love, ${req.params.food}`);
});

// localhost:3000/favoriate/car
// localhost:3000/favoriate/color?color=req
// localhost:3000/favoriate/food

// localhost:3000/favoriate/:item
/*
?q=foo&a=bar&pageNo=42
{
    q: 'foo',
    a: 'bar',
    pageNo: 42
}
*/

app.listen(port, function (){
    //tells the server where to listen for request 
    // on port 3000
   console.log(`hello-express is lisiting on port ${port}`);
    // console.log("hello-express is lisiting on port"  + "   " +port);

});
