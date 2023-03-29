//Returned values: can be captured in variable, can be passed to another function,
function add(x, y) {
  console.log("needs to be before the return to print out!");
  const sum = add(10, 16);
  return x + y;
}

//calling the function by passing the values of the parameters
add(sum);
console.log(sum);

//TO RETURN a function, ALL you have to do is to add the word "return"
//RULES:
//you can return ONLY ONE thing from a function... Can't return 2 separate values for x and y for example
//if you want to return them both, you can use an array: return [x, y]
//RETURN ends function execution! If return is in the middle of the function, the code after it, it is not going to
//However, if there is "if" statement, than the code after return might run
