//Loops UDEMY JS for Beginners

//FOR LOOP Syntax:

//******for ([initialExpression]; [condition]; [incrementExpression]);
//              10   total times        50 60                 +1

//******NOTE: i stands for index! It is not a number, think of it as an index and Keep in mind arrays and strings are starting with index of 0

//******NOTE: when condition >=, usually increments --;
//******NOTE: when condition <=, usually increments ++;

// if (){

// }
//same syntax's as if
console.log("---THE IDEA IS:---");
console.log("");

for (let i = 1; i <= 10; i++) {
  console.log("HELLO", i);
}

for (let q = 1; q <= 20; q++) {
  console.log(`${q}x${q}=${q * q}`);
}

for (let num = 200; num >= 0; num -= 25) {
  console.log(num);
}
