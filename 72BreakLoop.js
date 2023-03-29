// BREAK more common for WHILE loop, not so much in For loop

for (i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
}
console.log(i);

console.log("-------Using BREAK can restructure a WHILE loop:------------");

const target = Math.floor(Math.random() * 10); //make it const! Target should not change!
let guess = Math.floor(Math.random() * 10);
console.log(`Target: ${target} Guess: ${guess}`);

while (true) {
  //while(true) not good practice, better say while(gameOver) for example
  if (guess === target) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10); //not using let to assign a new variable, just using guess to re-run the same variable from above!
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log("YOU WIN!");
