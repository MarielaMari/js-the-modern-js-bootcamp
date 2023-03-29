//#62 Udemy JS for Beginners

//Array nested in an Object
const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg);

//Object nested within an Array
console.log();
console.log("-----------Object Nested in Array---------");
const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];

const prices = (shoppingCart[0].price);
console.log(prices)