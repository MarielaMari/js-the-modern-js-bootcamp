//#52 Udemy JS For Beginners

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

let swimmers = animals.slice(0, 2); //NOTE: does not include index 2, only 0 and 1; to get index 2 need to change to animals.slice(0,3)
console.log(swimmers);

let mammals = animals.slice(2, 4);
console.log(mammals);

let reptiles = animals.slice(4, 6); //Even though there is no index of 6, we need to use it to get index of 5
console.log(reptiles);

console.log(
  "-------------Use .SLICE with negative number to get the last 3 for example------------------"
);
let quadruped = animals.slice(-3);
console.log(quadruped);

console.log("----use .SLICE() to quickly make a copy of an array:------------");
let copyArray = animals.slice();
console.log(copyArray);
