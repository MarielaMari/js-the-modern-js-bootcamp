// #49 Udemy, JS Beginners

//CONCAT from MDN documents: used to merge 2 or more arrays.
//this method is not changing existing arrays, but instead returns new array

const array1 = ["a", "b", "c"];
const array2 = ["1", "2", "3"];
const array3 = ["left", "right"];
const array4 = ["South", "North", "East", "West"];

const concatArray = array1.concat(array2);
console.log(concatArray);

console.log("-------The ORDER MATTERS: ----------------");

const concatReverseArray = array2.concat(array1);
console.log(concatReverseArray);

console.log("-------Concate More than 2 Arrays: ----------------");
const fourArrays = array2.concat(array1, array4, array3);
console.log(fourArrays);
