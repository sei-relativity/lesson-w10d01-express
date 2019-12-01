//load the express module on our server
//Load ExpressJS

const express = require('express');

const indexRouter = require('./routes/index')

const peopleRouter = require('./routes/people')

//Create a new express server

const app = express();

/***Middleware***/

//Parse JSON request sent by the user
//and convert it JS Object before
//a Route uses it
app.use(express.json());


/***Routes ***/
app.use('/',indexRouter)
app.use(peopleRouter)
//Tells the server where to listen for requests
const port = 3000;


app.get('/', function (req, res) {
  res.send('Go To Hell!!');

});

app.get('/greeting', function (req, res) {
  res.send('Go To Hell F***er!!');

});

app.get('/cup?', function (req, res) {
  console.dir(req.query.q)
  res.send('I want it back!!');

});
app.get('/:name', function (req, res) {
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);
  res.send(`${req.params.name}, hang on there, ${req.query.first_name} ${req.query.last_name} is with you`);
})

app.get('/food/:food', function (req, res) {
  res.send(`${req.params.food}, come to mama`);
})

app.get('/sightings/:sighting', function (req, res) {
  res.send(`How many ufo sightings you think there are in ${req.query.state}? ${req.query.sights} is with you`);
})

app.get('/bigfoot/:bigfoot', function (req, res) {
  console.log(req.query);
  if (req.query.blurry === "true")
    res.send(`It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside. Run! He's fuzzy! Get out of there!`)
  else
    res.send(`A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.`)
})

app.get('/hello/:name', function (req, res) {
  res.send({ params: req.params, queries: req.query });
});

app.get('/favorite/:noun', function (req, res) {
  res.send(`I have a favorite ${req.params.noun} it is ${req.query[req.params.noun]} `);
})

app.listen(port, function () {
  //you can use => function
  //tells the server where to listen for requests
  //on port 3000
  console.log(`hello-express is listening on port ${port}`);
});
