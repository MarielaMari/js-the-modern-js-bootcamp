// JS Beginner Tutorial UDEMY
//#84

function avg(arr) {
  let total = 0;
  //loop over each num
  for (let num of arr) {
    total += num;
  }
  //add them together
  //divide by number of nums

  let result = total / arr.length;
  return result; // add this line to return the calculated average
}
console.log(avg([0, 50, 100, 150, 200, 250]));
