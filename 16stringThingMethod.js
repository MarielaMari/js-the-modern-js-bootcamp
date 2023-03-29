//#19 from Udemy- JS for Beginners

console.log("-----------TESTING .toUpperCase --------------");
let msg = "you are so grounded mr";
msg = msg.toUpperCase();
console.log(msg);

//.toLowerCase

console.log("-----------TESTING .toLowerCase --------------");

let msgLowerCase = "TESTING lowerCASE";
msgLowerCase = msgLowerCase.toLowerCase();

console.log(msgLowerCase);

console.log("-----------TESTING .trim to REMOVE SPACES--------------");
//.trim removes only leading or following spaces. DOES NOT remove spaces in the middle of the word!
let colorTrim = "   purple      ";
let trimmedColor = colorTrim.trim();

console.log(colorTrim);
console.log(trimmedColor);
