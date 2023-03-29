//#55 Udemy JS for Beginners

//Value Type Variable - are stored in memory
let fruit;

// Array can be large. So, they are not stored in memory. Only the reference to the array is stored but not the actual Array.

let nums = [5, 6, 7, 8]; //this array has reference for example  9999999999
let otherNums = nums; // this will be pointing to the same reference from above 9999999999
//so, if we update an array, it is using its initial reference to find and update the array, it is not storing it into the variable num
