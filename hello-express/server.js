// Load the express module in our server
const express = require("express");

// Load the routes
const indexRouter = require("./routes/index");
const peopleRouter = require("./routes/people");

// ES6
// import express from "express";

// Create a new express server
const app = express();

/*
  *** Middleware ***
  Parse JSON request sent by the user
  and convert it into JS Object before a Route uses it
*/
app.use(express.json());

/*
 *** Routes ***
 */
app.use("/", indexRouter);
app.use(peopleRouter);

//  Tells the server where to listen for requests
// i.e. Specify the port number
const port = 3000;

// Build a route at /favorite/:noun where :noun can be any favorite 'thing' (e.g. - color, food, song, movie, jeans)
// The route will return the parameter :noun in the string I have a favorite <insert :noun here>.
// Add the expectation of query parameters, so that hitting the following route: /favorite/color?color=red will return to the browser the string I have a favorite color, it is red.
app.get("/favorite/:noun", (req, res) => {
  const noun = req.params.noun;
  const query = req.query;

  if (query[noun]) {
    res.send(`I have a favorite ${noun}, it is ${query[noun]}.`);
  } else {
    res.send(`I have a favorite ${noun}.`);
  }

  console.log({ params: req.params, queries: query });
});

/*
  A route at /sightings takes a query parameter of state and sights and responds with an object like this:
  {
    state:`<the state passed in>`,
    sights: `<how many ufo sightings you think there are in state>`
  }

  e.g. output "How many ufo sightings you think there are in New York? 42."
*/
app.get("/sightings", (req, res) => {
  const state = req.query.state;
  const sights = req.query.sights;
  res.send(
    `How many ufo sightings you think there are in ${state}? ${sights}.`
  );
});

// A /bigfoot route takes a query parameter of blurry and...
// If blurry is true, send the response: "It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside. Run! He's fuzzy! Get out of there!"
// If blurry is false, respond with: "A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence."
app.get("/bigfoot", (req, res) => {
  // blurry = true || false
  // everything comes from the browser is always a string
  let blurry = req.query.blurry;
  if (blurry === "true") {
    res.send(
      "TRUE <br> It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside. Run! He's fuzzy! Get out of there!"
    );
  } else {
    res.send(
      "FALSE <br> A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence."
    );
  }
});

//  /hello/:name?human=true
app.get("/hello/:name", (req, res) => {
  const params = req.params;
  const query = req.query;
  res.send({ params: params, queries: query });
});

// A route listens for /greeting and responds with "Hey, SEI Eternity!"
app.get("/greeting", (req, res) => {
  res.send("Hey, SEI Eternity!");
});

// A route listens for /rihanna and responds with "Work work work work work"
app.get("/rihanna", (req, res) => {
  res.send("Work work work work work");
});

// This bit of cod is just a test
app.get("/rihanna/:name", function(req, res) {
  let name = req.params.name;
  res.send(`${name} is Working working working working... Twerking`);
});

/*
  /moayad
  /:name << parameter
  http:localhost:3000/users/42/friends/9999
  http:localhost:3000/users/:user_id/friends/:friend_id

  localhost:3000/moayad?first_name=moayad
*/
app.get("/:name", (req, res) => {
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);
  res.send(
    `Hello, ${req.params.name} from (req.params).
    I am ${req.query.first_name} ${req.query.last_name} from (req.query)`
  );
});

// A route that uses 'food' as a parameter. It return a string that includes the food (e.g.- "I really love pizza").
app.get("/food/:name", function(req, res) {
  let foodName = req.params.name;
  res.send(`I really love ${foodName}! (^_^)`);
});

/*
  http:localhost:3000/favorite/car
  http:localhost:3000/favorite/color?color=red
  http:localhost:3000/favorite/food

  http:localhost:3000/favorite/:item

  ?q=foo&a=bar&pageNo=42

  {
    q: "foo",
    a: "bar",
    pageNo: 42
  }
*/

//  Tells the server where to listen for requests, on port 3000
app.listen(port, console.log(`hello-express is listening on port ${port}`));
