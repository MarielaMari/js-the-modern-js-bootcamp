//#70 UDEMY JS for Beginners

//*****SYNTAX of WHILE LOOP:  while (condition){ run this code inhere}
//*****DIFFERENCE with For Loop: for while loop we need to do more upfront, like assigning variables:
console.log("-----For Loop vs While Loop:-----");
console.log();
console.log("-----This is the FOR LOOP-----");

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log();
console.log("-----This is the WHILE LOOP-----");
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

//*****BETTER PRACTICE: To not create variables outside ot the loop when it is possible! In the case above, when generate numbers, prefer to use a FOR LOOP!
