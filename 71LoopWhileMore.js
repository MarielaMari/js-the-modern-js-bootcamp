//#71 UDEMY JS for Beginners

//***** WHILE LOOP excels where we do not know exactly how many times it will going to run
//While(!gameOver  )
//while(stillAlive  )
//While (livesLeft > 0 )
//SIMPLE VERSION

const target = Math.floor(Math.random() * 10); //This is to generate random (.random) integers (with .floor) in JS; other languages have simpler methods!

console.log(target);

let guess = Math.floor(Math.random() * 10);
while (!guess == target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10); //IMPORTANT! If we hadn't updated guess here, if we had it only 1 time up there; the loop would run forever!
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log("CONGRATS! YOU WIN!!");

//in the loop, update or attempt to make that condition false
