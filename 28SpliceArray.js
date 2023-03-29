//#53 Udemy JS for Beginners

//Splice - used in the middle of the Array
// Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//MAKE SURE TO ALWAYS INCLUDE 0 for deleteCOUNT if you are not deleting anything, otherwise SPLICE would be confused!

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
console.log();
let insertNew = animals.splice(1, 0, "octopus");
console.log(animals);
console.log(insertNew); //NOTE: it returns an empty array [] because we did not delete anything, see Syntax, we had 0 animals deleted

console.log();
let deleteOne = animals.splice(2, 3); //Note: we are starting from index of 2 and deleting 3 animals
console.log("The 3 deleted animals are:");
console.log(deleteOne);
