const express = require('express');
const fs = require('fs');
const app = express();
const dal = require('./data/recipeDAL').DAL;
const accountDAL = require('./data/accountDAL').DAL;


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
app.get("/addRecipe", (req, res) => {

    res.render("addRecipe");
});


app.post("/addRecipe", async (req,res) => {
    
    console.log(req.body);

    if(req.body.name != "" && req.body.Ingredientfunction !="" && req.body.instructions != "" && req.body.category != ""){
        // ingredientArray = new Array[string]
        // ingredientArray.push(req.body.Ingredients)
        dal.createRecipe(req.body.name, req.body.Ingredientfunction, req.body.instructions, req.body.category)
        const recipeURL = "http://localhost:3000/home"
        const bodyString = JSON.stringify(req.body)
        const recipeString = "Your Recipe : " + bodyString + " has been submitted!"

        console.log(recipeString)

        const result = await fetch(recipeURL,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: bodyString
        });
        res.render(bodyString)
    } else {
        res.render("home")
        // what to do if it is invalid
    }

    // now that we have the joke values 
    // how the heck do we give them to the AP so it can give it to mongoDB
    // We can use fetch, to send a request to OUR api passing the joke details

    // how do we respond
    res.redirect("/addRecipe")
    // get the joke values from the REQ
    // validate and call the DAL to create the joke
});

app.listen(port, () => {
    console.log("Express listening on port ", port)

});