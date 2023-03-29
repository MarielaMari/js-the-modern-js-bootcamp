//Functions allow us to write reusable, modular code
//a "CHUNK" of code is defined when it can be executed at a later point

//SYNTAX:
//function funcName(){ do something }

//TO RUN THE FUNCTION:
//funcName(); //run once
//funcName(); //run again!

//BUILT IN METHODS:
//'hello'.toUpperCase
//

function grumpus() {
  console.log("ohhhh, you again!");
  console.log("LEAVE ME ALONE :)!");
}
grumpus();
console.log("== You can call it second time: ===");
grumpus();
console.log();
console.log("== You can run it in a loop: ===");
for (let i = 0; i < 50; i++) {
  grumpus();
}
