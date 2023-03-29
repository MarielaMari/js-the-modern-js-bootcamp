let isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};
let falseSquare = isSquare(101);
console.log(falseSquare);

let trueSquare = isSquare(64);
console.log(trueSquare);

//we're using the Math.sqrt() function to calculate the square root of the input number n. Then, we're using the modulo operator (%) to check if the result is an integer or not. If it is an integer, then the number is a perfect square, and the function returns true. Otherwise, the function returns false.

