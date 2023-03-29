//#50 Udemy JS for Beginners

//INCLUDES = Searing for within array
console.log(
  "-----METHOD INCLUDES is used to SEARCH FOR. IT RETURNS TRUE OR FALSE--------"
);
let ingredients = ["water", "salt", "pepper", "butter", "cheese"];
console.log(ingredients.includes("fish"));

//Can search with INCLUDES using after index

console.log("------ INCLUDES searching after an index");
console.log(ingredients.includes("water", 3)); //it will give false, because there is no water after index of 3
console.log(ingredients.includes("water")); //if you remove the index of 3, it will search for water entire array and it will find it

console.log('-------Includes in simple if statement:----------')
if(ingredients.includes('cheese')) {
    console.log('I am dairy free, I cannot eat that!')
}