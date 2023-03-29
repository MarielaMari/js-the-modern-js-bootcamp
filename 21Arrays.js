//#44 and #45 from Udemy JS for Beginners
let shoppingList = ["Cheddar Cheese", "2% Milk"];

shoppingList[shoppingList.length] = "Ice Cream"; //it will ALWAYS add to the end
shoppingList[shoppingList.length] = "Potatoes"; //it will ALWAYS add to the end

console.log(shoppingList);

console.log("------------ARRAY METHODS-------------");

//ARRAY METHODS
//PUSH - add to end
//Pop - remove from end
//Shift - remove from start
//Unshift - add to start

let topSongs = ["Song 1", "Song 2"];

console.log("------------PUSH------------");
topSongs.push("Song 5");
topSongs.push("Song 6");
console.log(topSongs);

console.log("------------POP------------");
const poppingSong= topSongs.pop();
console.log('the popped Song is:');
console.log(poppingSong);

console.log("------------SHIFT------------");
const shiftArray= topSongs.shift();
console.log('The removed Song from the start with shift, is:')
console.log(shiftArray)

console.log("------------UNSHIFT------------");
const unshiftArray= topSongs.unshift('Song -3', 'Song -2', 'Song -1');
console.log('The added Song/s at the beginning with unshift, are:')
console.log(unshiftArray)
console.log(topSongs)

//NOTE: Unshifting items one at a time, is actually DIFFERENT from unshifting multiple items at once!