function isPurple(color) {
  console.log(`the color is ${color}, therefore the claim is:`);
  if (color.toLowerCase() === "purple") {
    console.log("true");
    return true;
  }
  console.log("false"); //used to check our code
  //removing the }else{ statement is possible; taking advantage of running return would stop the function

  return false; //used for the actual code
}

isPurple("red");

//SHORTER WAY, THAT ONLY WORKS FOR YES or NO SITUATION, IS:

function isPurpleShort(color) {
  console.log("-------------------SECOND CODE EXAMPLE----------------------");
  console.log(`the color is ${color}, therefore the claim is:`);
  return color.toLowerCase() === "purple"; //THIS IS A BOOLEAN EXPRESSION
}

isPurpleShort("purple");


