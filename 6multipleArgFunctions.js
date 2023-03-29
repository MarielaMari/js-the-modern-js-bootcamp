function square(num) {
  console.log(num * num);
}

square(10);
square(20);
square(30);

function sum(x, y) {
  console.log(`the sum is ${x + y}`);
}
sum(3, 2);

function divide(a, b) {
  console.log(`Division is: ${a / b}`);
}
divide(9, 3);

//if we have an argument a string, we will get NAN
function divide(a, b) {
  console.log(`Division is: ${a / b}`);
}
divide("s", 3);
