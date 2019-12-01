// Load the Express module on our server
const express = require("express");

// Import the index router
const indexRouter = require("./routes/index");
// Import the people router
const peopleRouter = require("./routes/people");
// Import the rihanna router
const rihannaRouter = require("./routes/rihanna");
// Import write router
const writeRouter = require("./routes/write");
// Import sightings router
const sightingsRouter = require("./routes/sightings");
// Import food router
const foodRouter = require("./routes/food");
// Import bigfoot router
const bigfootRouter = require("./routes/bigfoot");
// Import favorite router
const favoriteRouter = require("./routes/favorite");
// Import hello router
const helloRouter = require("./routes/hello");
// Import greetings router
const greetingRouter = require("./routes/greeting");
// Import name router
const nameRouter = require("./routes/name");

// Create a new express server
const app = express();

/*** Middleware ***/
// Parse JSON request sent by the user
// and convert ot intp JS object before a route uses it
app.use(express.json());
// Tells the server where to listen for requests
const port = 3000;

// Get requests

// index, using router
// mount the router to a single path!
app.use("/", indexRouter);

// the router figures out which one to mount
app.use(peopleRouter);

// mount the router to a single path!
app.use(rihannaRouter);
app.use(writeRouter);
app.use(sightingsRouter);
app.use(foodRouter);
app.use(bigfootRouter);
app.use(favoriteRouter);
app.use(helloRouter);
app.use(greetingRouter);
app.use(nameRouter);

app.listen(port, function() {
  // tells the server where to listen to for requests
  // on port 3000
  console.log(`hello-express is listening on port ${port}`);
});
