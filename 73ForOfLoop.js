// FOR ... OF  LOOP is new to JS, but not supported in Internet Explorer!

//Currently, to view the array content, we use a complicated way:
let subreddits = ["soccer", "popheads", "cringe", "books"];

for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}

console.log();

//less code and faster is, if you use For... Of loop:
console.log("Here is the same list with the cleaner For ... of code");
for (let list of subreddits) {
  console.log(list);
}
//WHERE FOR OF LOOP IS BETTER:

const magicSquare = [[2, 7, 6], [(9, 5, 1)], [(4, 3, 8)]];

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

//Here is the same example with FOR OF:
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

//WHERE FOR OF NOT HELPFUL (where you need to care about the index, the position, like the example below, then FOR OF not easy to use!)
console.log();
console.log("====WHERE NOT BENEFICIAL TO USE FOR OF LOOP===");
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}, ${words2[i]}`);
}
