const { mongoose, Schema, get } = require('mongoose');

const connectionString = "mongodb://127.0.0.1:27017/NeuBytes";;

// Configure mongoose, and connect to our database
mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongoose Successfully connected");
});

const recipe = new Schema(
    {
        id: Schema.Types.ObjectId, // the Record's PL
        name: String,
        ingriedents: Array,
        instructions: String
    },
    { collection: "Recipes" }
)

//function addInitialRecipes() {
   // var initialRecipes =[
    //    {recipeId: new mongoose.Types.ObjectId, name: "Cereal", ingriedents: ["Milk", "Cereal of your choice"], instructions: "Pour cereal in bowl then pour milk on top to desired amount." },
    //    {recipeId: new mongoose.Types.ObjectId, name: "Toast", ingriedents: ["Bread", "Butter", "Jam"], instructions: "Toast bread, butter toast, add jam."}
    //]

   // recipeCollection.insertMany(initialRecipes);
//}

const recipeCollection = mongoose.model("Recipes", recipe)

//addInitialRecipes()


exports.DAL = {

    createRecipe: function (name, ingredients, instructions) {
        var recipeToAdd =
            { recipeId: new mongoose.Types.ObjectId, name: name, ingredients: ingredients, instructions: instructions }
        recipeCollection.collection.insertOne(recipeToAdd)
    },

}
