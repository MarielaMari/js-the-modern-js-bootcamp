function rollDie() {
  let roll = Math.floor (Math.random () * 6) +1;
  console.log (`Rolled: ${roll}`);
}
rollDie();

//Math.random gives us a decimal between 0 and 1, than we multiply by 6 (example: 0.2 * 6..., as the largest decimal would give us is 0.999999). To get rid of the decimal we use Math.floor. The larger .the die roll should be 1 to 6, so we add 1 at the end (if dont add 1, then 0 will be among the random numbers)


