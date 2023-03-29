//#69 UDEMY from JS for Beginners

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

//The loop below will show us the entire array, each row
for (let i = 0; i < gameBoard.length; i++) {
  console.log(gameBoard[i]);
}

//To display only 1 row at a time, we need to add a variable and then add one more loop, to loop over row:
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  console.log("This is the row:");
  console.log(row);
  for (let j = 0; j < row.length; j++) {
    console.log("Here is the loop through each one item from each row:");
    console.log(row[j]);
  }
}

//Lets add them all together
console.log("------------ADD THEM ALL TOGETHER:--------------");
let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];

  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
    console.log(totalScore);
  }
}
