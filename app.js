const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // Allows express to parse JSON objects from the request
app.use(express.urlencoded());

const port = 3000;

app.use(express.static('public'));


app.get("/", (req, res) => {

    res.render("home")

});

app.get("/login", (req, res) => {


    res.render("login")
});

app.get("/profile", (req, res) => {
    res.render("profile");
});

app.listen(port, () => {
    console.log("Express listening on port ", port)

});