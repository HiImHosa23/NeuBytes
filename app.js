const express = require('express');
const fs = require('fs');
const app = express();
const dal = require('./data/recipeDAL').DAL;

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
app.get("/editProfile", (req, res) => {
    res.render("editProfile");
});
app.get("/overview", (req, res) => {
    res.render("overview");
});
app.get("/favorites", (req, res) => {
    res.render("favorites");
});
app.get("/myRecipes", (req, res) => {

    res.render("myRecipes");
});
app.post("/myRecipes/create", (req,res) => {
    console.log(req.body);
    if(req.body.question != "" && req.body.name != "" && req.body.ingredients != "" && req.body.instructions){
        dal.createRecipe(req.body.name, req.body.ingredients, req.body.instructions)
        res.json("Recipe created successfully");
    } else {
        res.render("/myRecipes/create")
    }
    // get the joke values from the REQ
    // validate and call the DAL to create the joke
});

app.listen(port, () => {
    console.log("Express listening on port ", port)

});