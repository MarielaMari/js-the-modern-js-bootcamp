function containsPurple(arr) {
  console.log(`the color is: ${color}`);
  for (let color of arr) {
    if (color === "purple" || color === "magenta") {
      return true;
    }
  }
  return false;
}

containsPurple[("blue", "pink", "magenta")];


//HERE YOU GO WORKING, LEARN FROM YOUR MISTAKES!
console.log ('-----------------HERE YOU GO--------------------')


function containsPurple1(arr) {
    console.log(`the colors are: ${arr}`);
    for (let color of arr) {
      if (color === "purple" || color === "magenta") {
        return true;
      }
    }
    return false;
  }
  
  const result = containsPurple1(["blue", "pink", "magenta"]);
  console.log(`The result is: ${result}`);
  