// Load the Express module on our server
const express = require('express');

const indexRouter = require('./routes/index.js')
const peopleRouter = require('./routes/people.js')

// create new express server
const app = express();



// ********   Middleware      ******

// parse JSON request sent by the user
// and converts it into JS object before
// a route uses it
app.use(express.json());

// **** Routes *****
// single path
app.use('/', indexRouter);

// multiple paths if routes are already in file
app.use(peopleRouter)

// Tells the server where to listen for requests
const port = 3000;




app.get('/greeting', function (req, res) {
    res.send('Hey, SEI Eternity!')
});

app.get('/rihanna', function (req, res) {
    res.send(req.query.q)
    res.send("Work work work work work")
    
});

app.get('/write', function(req, res){
    res.send(req.query.w)
})
// write?w=jdfkjds



// http:://localhost:3000/users/42/friends/9000
// http:://localhost:3000/users/:user_id/friends/:friend_id

// URL parameters
// :name


// http:://localhost:3000/:user/food/:food
// function with more than one param
// app.get('/:name/food/:food', function (req, res) {
    //     console.log(req.params);
    
    //     res.send(`Hello, ${req.params.name}! and really love ${req.params.food} `)
    // });
    
    
// http:://localhost:3000/food/:food
app.get('/food/:food', function (req, res) {
    console.log(req.params);
    
    res.send(`I really love ${req.params.food}!`)
});


// /sightings?state=new_york&sightings=42
app.get('/sightings', function(req, res) {
        console.log(req.route);
        console.log(req.query);

        res.send(`How many ufo sightings you think there are in ${req.query.state}, ${req.query.sightings}`)
})


app.get('/bigfoot', function(req, res) {
    console.log(req.route);
    console.log(req.query);
    // true here is a string not a boolean
    if (req.query.blurry === 'true'){
        res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside! Run! He's fuzzy! Get out of there!");
    } else {
        res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");
    }
})

//    /hello/:name?human=true
app.get('/hello/:name', function (req, res) {
    res.send(
        {
            params: req.params,
            queries: req.query
        }
    )
})

app.get('/favorite/:noun', function (req, res) {
    res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}`)
});

// ?q=foo&a=bar&pageNo=42
/*
    {
        q: foo,
        a: bar,
        pageNo: 42
    } 
*/

app.get('/:name', function (req, res) {
    console.log(req.params);
    console.log(req.route);
    console.log(req.query);
    
    
    
    res.send(`Hello, ${req.params.name}, my name is ${req.query.first_name} ${req.query.last_name}`)
});



app.listen(port, function() {
    // tells the server where to listen for requests
    // on port 3000
    console.log(`hello-express is listening on port ${port}`);
});

