//#54 Udemy JS for Beginners

//ARRAY.SORT works well as expected for strings
//ARRAY.SORT does not work for numbers (instead of comparing the numbers itself, it compares UTS-16 behind the scenes...)
//NOTE: to sort numbers, is used compareNumbers METHOD!!!

let people = ["Mari", "Tina", "Sonya", "Trish", "Silvia", "Betty", "Ani"];
let sortedPeople = people.sort();
console.log();
console.log("Here are the sorted people:");
console.log(sortedPeople);

//array.sort does not work for numbers
let nums = [34, 10, 10000, 33, 78, 55];
let sortedNums = nums.sort();
console.log(
  "--------array.sort Does NOT work for numbers as expected!-----------"
);
console.log(sortedNums);
