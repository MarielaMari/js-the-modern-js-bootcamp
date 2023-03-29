//For In will loop over the properties in an Object
//Syntax: for(variable in object) {}

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
};

for (let prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}

let total = 0;
for (let prop in jeopardyWinnings) {
  total += jeopardyWinnings[prop];
  console.log(`Ken Jennings Total Earnings: ${total}`);
}

//FOR IN loop can be used in Arrays (since Arrays are objects), but it is not very useful. In arrays the properties, the keys actually are the index numbers... JUST DO NOT USE FOR IN LOOP IN AN ARRAY!
