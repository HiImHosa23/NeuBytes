const myDiv = document.getElementById("myDiv")
let inputCount = 0;

// do client side things here!
let handleButtonClick = () => {
    console.log("Button clicked!");

    inputCount++;

    //let oldHtml = myDiv.innerHTML;

    input = "Ingredient" + inputCount.toString

    ingredientsArray= new Array()
    ingredientsArray.push(input)

    myDiv.innerHTML = myDiv.innerHTML + '<br>'+ '<input type="text" id="ingredients" name=' + input +  ' placeholder= "New Ingredient" > <br>';
    

    
};